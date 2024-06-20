import styled from 'styled-components';

import { groupBooksByYear, selectRecommendBook } from '~/utils';
import { AllBooks, RecommendedBook } from '~/features/home';

import books from '~/../dev-data/books';

function HomePage() {
  const recommendBook = selectRecommendBook(books);
  const groupedBooks = groupBooksByYear(books);

  return (
    <StyledHomePage>
      <RecommendedBook book={recommendBook} />
      <AllBooks groupedBooks={groupedBooks} />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  flex: 1;
  padding: 3.2rem 2rem;
  overflow: hidden;
`;

export default HomePage;
