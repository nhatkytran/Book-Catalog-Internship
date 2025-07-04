import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { sortedBooksTypes } from '~/types';
import { HeadingUI } from '~/ui';
import { px600, px800 } from '~/styles/GlobalStyles';
import { Book } from '~/features/home';
import { sortedBooksHeading } from '~/utils';

/**
 * A component that displays a sorted list of books in a desktop layout.
 * @param {Object} props - Component props.
 * @param {string} props.category - The category of the books.
 * @param {Book[]} props.books - The array of books to display.
 */
function SortedBooksDesktop({ category, books }) {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'year';

  return (
    <StyledSortedBooksDesktop>
      <HeadingUI as="h4">{sortedBooksHeading({ filter, category })}</HeadingUI>

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
