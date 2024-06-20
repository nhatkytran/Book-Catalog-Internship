import styled from 'styled-components';

import { sortedBooksTypes } from '~/types';
import { HeadingUI } from '~/ui';
import { px600, px800 } from '~/styles/GlobalStyles';
import { Book } from '~/features/home';

function SortedBooksDesktop({ category, books }) {
  return (
    <StyledSortedBooksDesktop>
      <HeadingUI as="h4">First published in {category}</HeadingUI>

      <BodyUI>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </BodyUI>
    </StyledSortedBooksDesktop>
  );
}

const StyledSortedBooksDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BodyUI = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media only screen and (max-width: ${px800}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${px600}) {
    gap: 1.6rem;
  }
`;

SortedBooksDesktop.propTypes = sortedBooksTypes;

export default SortedBooksDesktop;
