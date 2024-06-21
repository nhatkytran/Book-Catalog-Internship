import { useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { arrayOf } from 'prop-types';

import { HeadingUI } from '~/ui';
import { Filter } from '~/components';
import {
  groupBooksByAuthor,
  groupBooksByRating,
  groupBooksByYear,
} from '~/utils';
import { useWindowEventListener } from '~/hooks';
import { px400, px600 } from '~/styles/GlobalStyles';
import { SortedBooksDesktop, SortedBooksMobile } from '~/features/home';
import { bookShape } from '~/types';

// There are two components for displaying books based on a device's width
// We use state here instead of using CSS display none to support useEffect in the component for mobile version
const checkViewPort600 = () => window.innerWidth <= 600;

function AllBooks({ books }) {
  const [searchParams] = useSearchParams();
  const [isResponsiveWidth, setIsResponsiveWidth] = useState(checkViewPort600);

  const filter = searchParams.get('filter') || 'year';

  let filteredBooks = books;

  if (filter === 'year') filteredBooks = groupBooksByYear(filteredBooks);
  if (filter === 'author') filteredBooks = groupBooksByAuthor(filteredBooks);
  if (filter === 'rating') filteredBooks = groupBooksByRating(filteredBooks);

  useWindowEventListener({
    eventName: 'resize',
    handler: () => setIsResponsiveWidth(checkViewPort600),
  });

  return (
    <StyledAllBooks>
      <HeaderUI>
        <HeadingUI as="h1">All books</HeadingUI>

        <FilterBoxUI>
          <p>Group by:</p>
          <Filter
            filterField="filter"
            options={[
              { value: 'all', label: 'Year' },
              { value: 'author', label: 'Author' },
              { value: 'rating', label: 'Rating' },
            ]}
          />
        </FilterBoxUI>
      </HeaderUI>

      <BodyUI>
        {filteredBooks.map(book => {
          const category = book[filter];
          const props = { category, books: book.books };

          return !isResponsiveWidth ? (
            <SortedBooksDesktop key={category} {...props} />
          ) : (
            <SortedBooksMobile key={category} {...props} />
          );
        })}
      </BodyUI>
    </StyledAllBooks>
  );
}

const StyledAllBooks = styled.div`
  width: 100%;
  font-family: var(--font-poppins);
  padding-top: 2rem;
  border-top: 1px solid var(--color-neutral-300);
`;

const HeaderUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;

  @media only screen and (max-width: ${px600}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const FilterBoxUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media only screen and (max-width: ${px400}) {
    gap: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const BodyUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  width: 100%;
  margin-top: 2rem;

  @media only screen and (max-width: ${px600}) {
    gap: 2.2rem;
  }
`;

AllBooks.propTypes = { books: arrayOf(bookShape).isRequired };

export default AllBooks;
