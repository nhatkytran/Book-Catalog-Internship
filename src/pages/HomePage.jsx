import styled from 'styled-components';

import { useAllBooks } from '~/hooks';
import { AllBooks, RecommendedBook } from '~/features/home';

function HomePage() {
  const { isPending, isError, data: books } = useAllBooks();

  // No books to display when books is []

  if (isPending || isError) return null;

  return (
    <StyledHomePage>
      <RecommendedBook books={books} />
      <AllBooks books={books} />
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
