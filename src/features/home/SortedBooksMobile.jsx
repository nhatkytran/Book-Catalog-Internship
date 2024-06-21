import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { useDragItems } from '~/hooks';
import { sortedBooksTypes } from '~/types';
import { HeadingUI } from '~/ui';
import { Book } from '~/features/home';
import { sortedBooksHeading } from '~/utils';

function SortedBooksMobile({ category, books }) {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'year';

  // Make sure class name are different when this component is reused
  const uniquePart = `${Math.random().toString().slice(2)}-${Date.now()}`;
  const bookClassName = `book-mobile-${uniquePart}`;
  const lineClassName = `book-line-${uniquePart}`;
  const lineProgressClassName = `book-line-progress-${uniquePart}`;

  const { containerRef } = useDragItems({
    itemsClassName: bookClassName,
    itemsLength: books.length,
    itemsGap: 12, // In CSS -> 1.2rem
    lineClassName,
    lineProgressClassName,
  });

  return (
    <StyledSortedBooksMobile>
      <HeadingUI as="h4">{sortedBooksHeading({ filter, category })}</HeadingUI>

      <BodyUI ref={containerRef}>
        {books.map(book => (
          <BookBoxUI key={book.id} className={bookClassName}>
            <Book book={book} />
          </BookBoxUI>
        ))}
      </BodyUI>

      <LineUI className={lineClassName}>
        <LineProgressUI
          className={lineProgressClassName}
          $numItems={books.length}
        ></LineProgressUI>
      </LineUI>
    </StyledSortedBooksMobile>
  );
}

const StyledSortedBooksMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1.2rem;
`;

const BodyUI = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100%;
  grid-auto-columns: 100%;
  grid-gap: 1.2rem;
`;

const BookBoxUI = styled.div`
  min-width: 95%;
  transition: all ease 0.2s;
`;

const LineUI = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: var(--color-neutral-400);
`;

const LineProgressUI = styled.div`
  height: 0.2rem;
  background-color: var(--color-neutral-600);
  width: ${props => (1 / props.$numItems) * 100}%;
`;

SortedBooksMobile.propTypes = sortedBooksTypes;

export default SortedBooksMobile;
