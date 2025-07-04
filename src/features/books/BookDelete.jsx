import styled, { css } from 'styled-components';
import { string, func } from 'prop-types';

import { useMutateAction, useWindowEventListener } from '~/hooks';
import { ButtonMainCancelUI, HeadingUI } from '~/ui';
import { ButtonMain } from '~/components';
import { deleteBook } from '~/services';

/**
 * A confirmation dialog component for deleting a book.
 * @param {Object} props - Component props.
 * @param {string} props.bookID - The unique identifier of the book to be deleted.
 * @param {Function} props.onCloseModal - Callback function to close the modal.
 */
function BookDelete({ bookID, onCloseModal }) {
  const { isPending, mutate } = useMutateAction({
    key: 'books',
    actionFn: deleteBook,
  });

  useWindowEventListener({
    eventName: 'keydown',
    handler: event => event.key === 'Enter' && !isPending && mutate(bookID),
  });

  return (
    <StyledBookDelete>
      <HeadingUI as="h3">Delete book</HeadingUI>
      <p>Do you really want to delete this book forever? This action cannot be reversed.</p>
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
  bookID: string.isRequired,
  onCloseModal: func.isRequired,
};

export default BookDelete;
