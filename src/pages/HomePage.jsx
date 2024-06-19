import styled from 'styled-components';

import books from '~/../dev-data/books';
import { selectRecommendBook } from '~/utils';
import { RecommendedBook } from '~/features/home';

function HomePage() {
  const recommendBook = selectRecommendBook(books);

  return (
    <StyledHomePage>
      <RecommendedBook book={recommendBook} />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  flex: 1;
  padding: 3.2rem 2rem;
`;

export default HomePage;
