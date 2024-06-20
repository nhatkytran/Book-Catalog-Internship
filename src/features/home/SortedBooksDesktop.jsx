import styled from 'styled-components';
import { arrayOf, oneOfType, string, number } from 'prop-types';

import { bookShape } from '~/types';
import { HeadingUI } from '~/ui';
import { px500, px600, px800 } from '~/styles/GlobalStyles';
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

  @media only screen and (max-width: ${px500}) {
    display: none;
  }
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

SortedBooksDesktop.propTypes = {
  category: oneOfType([string, number]).isRequired,
  books: arrayOf(bookShape),
};

export default SortedBooksDesktop;
