import styled from 'styled-components';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import PropTypes from 'prop-types';

import { formatISBN13, isValidIsbn13 } from '~/utils';
import { DashChar, Modal, Table, TableMenu } from '~/components';
import { BooksTableRowButton, BooksTableRowMenuButton } from '~/features/books';

function BooksTableRow({ book }) {
  const { id, name, authors, publicationYear, rating, isbn } = book;

  if (isbn && !isValidIsbn13(isbn)) throw new Error('Invalid ISBN!');

  // 0 && 1 -> 0 -> Only format ISBN if ISBN exists
  const formattedISBN = isbn && formatISBN13(isbn);

  if (!isValidIsbn13())
    return (
      <Table.Row>
        <BookImageUI src="/images/book-cover.jpeg" alt="Saritasa book item" />

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
              renderButton={({ icon, label, value, onClick }) => (
                <Modal.Open openName={value}>
                  <BooksTableRowMenuButton
                    icon={icon}
                    label={label}
                    onClick={onClick}
                  />
                </Modal.Open>
              )}
            ></TableMenu.List>

            <Modal.Window
              openName="edit"
              renderWindow={() => <div>Edit modal</div>}
            />
            <Modal.Window
              openName="delete"
              renderWindow={() => <div>Delete modal</div>}
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

BooksTableRow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    publicationYear: PropTypes.number,
    rating: PropTypes.number,
    isbn: PropTypes.number,
  }),
};

export default BooksTableRow;
