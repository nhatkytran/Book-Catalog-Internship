import styled from 'styled-components';

import { useAllBooks } from '~/hooks';
import { AllBooks, RecommendedBook } from '~/features/home';
import { TableBodyMessageUI } from '~/ui';
import { Loader } from '~/components';

function HomePage() {
  const { isPending, isError, error, data: books = [] } = useAllBooks();

  return (
    <StyledHomePage>
      {isPending && <Loader />}
      {isError && <TableBodyMessageUI $noMargin={true} $color="red">{error.message}</TableBodyMessageUI>}
      {!isPending && !isError && (books.length ? (
        <>
          <RecommendedBook books={books} />
          <AllBooks books={books} />
        </>
      ) : (
        <TableBodyMessageUI $noMargin={true}>
          No data to show at the moment.
        </TableBodyMessageUI>
      ))}
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 3.2rem 2rem;
  overflow: hidden;
`;

export default HomePage;
