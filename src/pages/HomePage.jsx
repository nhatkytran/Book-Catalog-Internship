import styled from 'styled-components';

import { groupBooksByYear, selectRecommendBook } from '~/utils';
import { AllBooks, RecommendedBook } from '~/features/home';

import books from '~/../dev-data/books';
import { Loader } from '~/components';

function HomePage() {
  const recommendBook = selectRecommendBook(books);
  const groupedBooks = groupBooksByYear(books);

  const isPending = true;

  // return (
  //   <StyledHomePage>
  //     {isPending && (
  //       <LoaderBoxUI>
  //         <Loader />
  //       </LoaderBoxUI>
  //     )}
  //   </StyledHomePage>
  // );

  return (
    <StyledHomePage>
      <RecommendedBook book={recommendBook} />
      <AllBooks groupedBooks={groupedBooks} />
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

const LoaderBoxUI = styled.div`
  /* display: grid;
  place-items: center; */
  margin: 4.8rem 2.4rem;
`;

export default HomePage;
