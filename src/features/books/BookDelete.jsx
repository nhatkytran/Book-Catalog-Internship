import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { useMutateAction } from '~/hooks';
import { ButtonMainCancelUI, HeadingUI } from '~/ui';
import { ButtonMain } from '~/components';
import { deleteBook } from '~/services';

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
          UI={ButtonMainCancelUI}
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
