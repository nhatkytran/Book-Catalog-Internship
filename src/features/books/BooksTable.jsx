import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { TableBodyMessageUI } from '~/ui';
import { Loader, Table } from '~/components';
import { BooksTableRow } from '~/features/books';
import { getAllBooks } from '~/services';
import { useSearchParams } from 'react-router-dom';

function BooksTable() {
  const [searchParams] = useSearchParams();

  const { isPending, isError, data } = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
  });

  let books = data || [];

  // FILTER //////////

  const filter = searchParams.get('year');

  if (filter === 'no-year') books = books.filter(book => !book.publicationYear);

  if (filter === 'with-year')
    books = books.filter(book => book.publicationYear);

  // SORT //////////

  const sortBy = searchParams.get('sortBy');

  // By default, newest created book comes first
  books = books.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

  if (sortBy) {
    const [field, direction] = sortBy.split('-');
    const modifier = direction === 'asc' ? 1 : -1;

    if (field === 'name')
      books = books.sort((a, b) => {
        const nameA = a.name[0].toLowerCase();
        const nameB = b.name[0].toLowerCase();
        const side = nameA <= nameB ? -1 : 1;

        return side * modifier;
      });

    if (field === 'publicationYear')
      books = books.sort((a, b) => {
        let side;

        if (a.publicationYear && b.publicationYear)
          side = a.publicationYear - b.publicationYear;
        if (!a.publicationYear && b.publicationYear) side = -1;
        if (a.publicationYear && !b.publicationYear) side = 1;

        return side * modifier;
      });

    if (field === 'rating')
      books = books.sort((a, b) => (a.rating - b.rating) * modifier);
  }

  return (
    <Table columns="0.7fr 2fr 1.2fr 0.5fr 0.7fr 1.5fr 0.6fr">
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Authors</div>
        <div>Year</div>
        <div>Rating</div>
        <div>ISBN</div>
        <div></div>
      </Table.Header>

      {isPending && (
        <LoaderBoxUI>
          <Loader />
        </LoaderBoxUI>
      )}

      {isError && (
        <TableBodyMessageUI $color="red">
          Something went wrong!
        </TableBodyMessageUI>
      )}

      {!isPending && !isError && (
        <Table.Body
          data={books}
          render={book => <BooksTableRow book={book} key={book.id} />}
        />
      )}

      {!!books.length && (
        <Table.Footer>
          <div>Page Number</div>
          <div>Pagination</div>
        </Table.Footer>
      )}
    </Table>
  );
}

const LoaderBoxUI = styled.div`
  display: grid;
  place-items: center;
  margin: 4.8rem 2.4rem;
`;

export default BooksTable;
