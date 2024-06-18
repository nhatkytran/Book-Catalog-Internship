import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { HeadingUI } from '~/ui';
import { ButtonMain } from '~/components';
import { deleteBook } from '~/services';
import { useMutateAction } from '~/hooks';

function BookDelete({ bookID, onCloseModal }) {
  const { isPending, mutate } = useMutateAction({
    key: 'books',
    actionFn: deleteBook,
  });

  return (
    <StyledBookDelete>
      <HeadingUI as="h3">Delete book</HeadingUI>

      <p>
        Do you really want to delete this book forever? This action cannot be
        reversed.
      </p>

      <div>
        <ButtonMain
          UI={ButtonMainCancel}
          disabled={isPending}
          onClick={onCloseModal}
        >
          Cancel
        </ButtonMain>

        <ButtonMain
          UI={ButtonMainDelete}
          onClick={() => mutate(bookID)}
          disabled={isPending}
        >
          Delete
        </ButtonMain>
      </div>
    </StyledBookDelete>
  );
}

const StyledBookDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 40rem;

  & p {
    color: var(--color-neutral-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const ButtonMainCancel = css`
  background-color: var(--color-white);
  color: var(--color-neutral-600);
  border: 1px solid var(--color-neutral-300);

  &:not(:disabled):hover {
    background-color: var(--color-neutral-100);
  }
`;

const ButtonMainDelete = css`
  background-color: var(--color-red-600);

  &:not(:disabled):hover {
    background-color: var(--color-red-700);
  }
`;

BookDelete.propTypes = {
  bookID: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default BookDelete;
