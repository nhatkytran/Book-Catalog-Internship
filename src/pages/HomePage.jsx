import styled from 'styled-components';

import { selectRecommendBook } from '~/utils';
import { AllBooks, RecommendedBook } from '~/features/home';

import books from '~/../dev-data/books';

function HomePage() {
  const recommendBook = selectRecommendBook(books);

  return (
    <StyledHomePage>
      <RecommendedBook book={recommendBook} />
      <AllBooks />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  flex: 1;
  padding: 3.2rem 2rem;
`;

export default HomePage;
