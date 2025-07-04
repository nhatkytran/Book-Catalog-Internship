import styled from 'styled-components';
import { HiPencil, HiTrash } from 'react-icons/hi2';

import { formatISBN13, isValidIsbn13 } from '~/utils';
import { DashChar, Modal, Table, TableMenu } from '~/components';
import { bookShape } from '~/types';
import { BookDelete, BooksForm, BooksTableRowButton, BooksTableRowMenuButton } from '~/features/books';

/**
 * A table row component that displays book information and provides actions (edit/delete).
 * @param {Object} props - Component props.
 * @param {Object} props.book - The book object to display.
 */
function BooksTableRow({ book }) {
  const { id, name, authors, publicationYear, rating, isbn } = book;
  if (isbn && !isValidIsbn13(isbn)) throw new Error('Invalid ISBN!');
  const formattedISBN = isbn && formatISBN13(isbn);

  return (
    <Table.Row>
      <BookImageUI src="/images/book.jpeg" alt={`Book: ${book.name}`} />

      <BookNameUI>{name}</BookNameUI>
      <DashChar priorityValue={authors.join(', ')} UI={BookNameUI} />
      <DashChar priorityValue={publicationYear} />
      <DashChar priorityValue={rating} />
      <DashChar priorityValue={formattedISBN} />

      <Modal>
        <TableMenu>
          <TableMenu.Toggle
            id={id}
            renderButton={({ active, onClick }) => (
              <BooksTableRowButton active={active} onClick={onClick} />
            )}
          />

          <TableMenu.List
            id={id}
            buttons={[
              { icon: HiPencil, label: 'Edit', value: 'edit' },
              { icon: HiTrash, label: 'Delete', value: 'delete' },
            ]}
            renderButton={({ icon, label, value, onCloseModal }) => (
              <Modal.Open openName={value}>
                <BooksTableRowMenuButton
                  icon={icon}
                  label={label}
                  onClick={onCloseModal}
                />
              </Modal.Open>
            )}
          ></TableMenu.List>

          <Modal.Window
            openName="edit"
            renderWindow={({ onCloseModal }) => (
              <BooksForm
                type="edit"
                isMultipleTimes={false}
                bookToEdit={book}
                onCloseForm={onCloseModal}
              />
            )}
          />
          <Modal.Window
            openName="delete"
            renderWindow={({ onCloseModal }) => (
              <BookDelete bookID={id} onCloseModal={onCloseModal} />
            )}
          />
        </TableMenu>
      </Modal>
    </Table.Row>
  );
}

const BookImageUI = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center center;
  transform: scale(1.5) translateX(-4px);
`;

const BookNameUI = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

BooksTableRow.propTypes = { book: bookShape };

export default BooksTableRow;
