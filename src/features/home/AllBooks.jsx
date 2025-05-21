import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { arrayOf } from 'prop-types';

import { HeadingUI } from '~/ui';
import { Filter } from '~/components';
import { groupBooksByAuthor, groupBooksByRating, groupBooksByYear } from '~/utils';
import { useWindowEventListener } from '~/hooks';
import { px400, px600 } from '~/styles/GlobalStyles';
import { SortedBooksDesktop, SortedBooksMobile } from '~/features/home';
import { bookShape } from '~/types';
import { capitalize } from '~/utils';

const SEARCH_PARAMS_KEY = 'filter';
const DEFAULT_SEARCH_PARAMS_VALUE = 'year';
const FILTER_BY_YEAR = 'year';
const FILTER_BY_AUTHOR = 'author';
const FILTER_BY_RATING = 'rating';
const VIEWPORT_WIDTH_THRESHOLD = 600;

// There are two components for displaying books based on a device's width
// We use state here instead of using CSS display none to support useEffect in the component for mobile version
const checkViewportSupport = () => window.innerWidth <= VIEWPORT_WIDTH_THRESHOLD;

function AllBooks({ books }) {
  const [searchParams] = useSearchParams();
  const [isResponsiveWidth, setIsResponsiveWidth] = useState(checkViewportSupport);
  const filter = searchParams.get(SEARCH_PARAMS_KEY) || DEFAULT_SEARCH_PARAMS_VALUE;

  let filteredBooks = books;
  if (filter === FILTER_BY_YEAR) filteredBooks = groupBooksByYear(filteredBooks);
  if (filter === FILTER_BY_AUTHOR) filteredBooks = groupBooksByAuthor(filteredBooks);
  if (filter === FILTER_BY_RATING) filteredBooks = groupBooksByRating(filteredBooks);

  useWindowEventListener({
    eventName: 'resize',
    handler: () => setIsResponsiveWidth(checkViewportSupport),
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
              { value: 'all', label: capitalize(FILTER_BY_YEAR) },
              { value: 'author', label: capitalize(FILTER_BY_AUTHOR) },
              { value: 'rating', label: capitalize(FILTER_BY_RATING) },
            ]}
          />
        </FilterBoxUI>
      </HeaderUI>
      <BodyUI>
        {filteredBooks.map(book => {
          const category = book[filter];
          const SortedBooksComponent = isResponsiveWidth ? SortedBooksMobile : SortedBooksDesktop;
          return <SortedBooksComponent key={category} category={category} books={book.books} />;
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
