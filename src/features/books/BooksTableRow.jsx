import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DashChar, Table } from '~/components';

function BooksTableRow({ book }) {
  const { name, authors, publicationYear, rating, isbn } = book;

  return (
    <Table.Row>
      <BookImageUI src="/images/book-cover.jpeg" alt="Saritasa" />
      <BookNameUI>{name}</BookNameUI>
      <DashChar priorityValue={authors.join(', ')} UI={BookNameUI} />
      <DashChar priorityValue={publicationYear} />
      <DashChar priorityValue={rating} />
      <DashChar priorityValue={isbn} />
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
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    publicationYear: PropTypes.number,
    rating: PropTypes.number,
    isbn: PropTypes.string,
  }),
};

export default BooksTableRow;
