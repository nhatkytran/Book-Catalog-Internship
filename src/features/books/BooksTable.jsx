import styled from 'styled-components';

import { useAllBooks, useSearchParamsBooks } from '~/hooks';
import { TableBodyMessageUI } from '~/ui';
import { Loader, Table } from '~/components';
import { BooksTablePagination, BooksTableRow } from '~/features/books';

/** A table component that displays a list of books with loading, error, and empty states. */
function BooksTable() {
  const { isPending, isError, error, data } = useAllBooks();
  const { books, totalBooks } = useSearchParamsBooks(data);

  return (
    <Table columns="0.7fr 2fr 1.2fr 0.5fr 0.7fr 1.5fr 0.4fr">
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
        <TableBodyMessageUI $color="red">{error.message}</TableBodyMessageUI>
      )}

      {!isPending && !isError && (
        <Table.Body
          data={books}
          render={book => <BooksTableRow book={book} key={book.id} />}
        />
      )}

      {!!books.length && (
        <Table.Footer>
          <BooksTablePagination count={totalBooks} />
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
