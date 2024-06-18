import { Controller, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonMainCancelUI, HeadingUI } from '~/ui';
import { BooksFormRow } from '~/features/books';
import { isValidIsbn13 } from '~/utils';
import { ButtonMain } from '~/components';
import { addBook } from '~/services';
import { useMutateAction } from '~/hooks';

function BooksForm({ type, onCloseForm }) {
  const { isPending, mutate } = useMutateAction({
    key: 'books',
    actionFn: addBook,
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Make input ID unique when we reuse this component
  const generateInputID = fieldName => `${fieldName}-${type}-${Date.now()}`;

  const onSubmit = ({ name, authors, publicationYear, rating, isbn }) => {
    const book = {
      name: name.trim(),
      authors: authors.map(author => author.trim()),
      publicationYear: parseInt(publicationYear),
      rating: parseInt(rating) || 0,
      isbn: parseInt(isbn),
      createdAt: new Date(),
    };

    mutate(book, { onSuccess: () => reset() });
  };

  return (
    <StyledBooksForm>
      <HeadingUI as="h3">{type === 'add' ? 'Add new book' : ''}</HeadingUI>

      <FormUI onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <BooksFormRow
          label="Name"
          message="<= 100 characters"
          errorMessage={errors?.name?.message}
        >
          <InputUI
            type="text"
            name="name"
            id={generateInputID('name')}
            disabled={isPending}
            {...register('name', {
              required: 'Book name is required',
              maxLength: {
                value: 100,
                message: 'Book name cannot exceed 100 characters',
              },
              validate: value =>
                value.trim() !== '' || 'Book name cannot be an empty string',
            })}
          />
        </BooksFormRow>

        {/* Authors */}
        <BooksFormRow
          label="Authors"
          message="Enter authors separated by commas"
          errorMessage={errors?.authors?.message}
        >
          <Controller
            type="text"
            name="authors"
            id={generateInputID('authors')}
            disabled={isPending}
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <InputUI
                {...field}
                onChange={e => field.onChange(e.target.value.split(','))}
              />
            )}
            rules={{
              required: 'Book authors is required',
              validate: authors =>
                authors.every(author => author.trim() !== '') ||
                'At least one author is required and all authors are not empty',
            }}
          />
        </BooksFormRow>

        {/* Publication Year */}
        <BooksFormRow
          label="Publication year"
          message={`1800 < year <= ${new Date().getFullYear()}`}
          errorMessage={errors?.publicationYear?.message}
        >
          <InputUI
            type="number"
            name="publicationYear"
            id={generateInputID('publicationYear')}
            disabled={isPending}
            {...register('publicationYear', {
              required: 'Book publication year is required',
              min: { value: 1801, message: 'Year must be greater than 1800' },
              max: {
                value: new Date().getFullYear(),
                message: `Year must be less than or equal to ${new Date().getFullYear()}`,
              },
            })}
          />
        </BooksFormRow>

        {/* Rating */}
        <BooksFormRow
          label="Rating"
          message="0 <= rating <= 10"
          errorMessage={errors?.rating?.message}
        >
          <InputUI
            type="number"
            name="rating"
            id={generateInputID('rating')}
            disabled={isPending}
            {...register('rating', {
              required: 'Book rating is required',
              min: { value: 0, message: 'Rating must be at least 0' },
              max: { value: 10, message: 'Rating must be at most 10' },
            })}
          />
        </BooksFormRow>

        {/* ISBN */}
        <BooksFormRow
          label="ISBN"
          message="What is ISBN?"
          link="https://gitlab.cs.usu.edu/erik.falor/sp21-cs1440-lecturenotes/-/blob/dddc88ed463893ab9c424c10c3f8fec226d94a10/Module0/SDP_example_project-ISBN-13/Instructions.md#:~:text=Computing%20the%20ISBN%2D13%20check%20digit,-The%20check%20digit&text=It%20is%20computed%20by%20summing,in%20the%20range%200%2D9%20."
          errorMessage={errors?.isbn?.message}
        >
          <InputUI
            type="number"
            name="isbn"
            id={generateInputID('isbn')}
            disabled={isPending}
            {...register('isbn', {
              required: 'Book ISBN is required',
              validate: value =>
                isValidIsbn13(value) || 'Book ISBN is not valid',
            })}
          />
        </BooksFormRow>

        {/* Photo */}
        <BooksFormRow label="Photo" message="Feature coming soon">
          <FileInputUI
            name="photo"
            id={generateInputID('photo')}
            disabled={true}
          />
        </BooksFormRow>

        <BooksFormRow>
          <ButtonMain
            UI={ButtonMainCancelUI}
            disabled={isPending}
            onClick={onCloseForm}
          >
            Cancel
          </ButtonMain>

          <ButtonMain disabled={isPending}>Create new book</ButtonMain>
        </BooksFormRow>
      </FormUI>
    </StyledBooksForm>
  );
}

const CommonFormStyled = css`
  display: flex;
  flex-direction: column;
`;

const StyledBooksForm = styled.div`
  ${CommonFormStyled};
  gap: 1.2rem;
`;

const FormUI = styled.form`
  ${CommonFormStyled};
  width: 100%;
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  padding: 2.4rem 4rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-neutral-300);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
`;

const InputUI = styled.input`
  background-color: var(--color-neutral-50);
  color: inherit;
  font-family: inherit;
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-neutral-300);

  &:disabled {
    background-color: var(--color-neutral-200);
  }
`;

const FileInputUI = styled.input.attrs({ type: 'file' })`
  background-color: var(--color-neutral-100);
  padding: 0;
  border: none;
  box-shadow: none;
  cursor: default;

  &:disabled {
    &::file-selector-button {
      cursor: not-allowed;
    }
  }

  &::file-selector-button {
    background-color: var(--color-blue-600);
    color: var(--color-neutral-50);
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem 1.4rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-blue-700);
    }
  }
`;

BooksForm.propTypes = {
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default BooksForm;
