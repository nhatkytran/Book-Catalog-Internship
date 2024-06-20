import styled from 'styled-components';

import { sortedBooksTypes } from '~/types';
import { HeadingUI } from '~/ui';
import { Book } from '.';
import useDragItems from '~/hooks/useDragItems';

function SortedBooksMobile({ category, books }) {
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
      <HeadingUI as="h4">First published in {category}</HeadingUI>

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
  display: flex;
  gap: 1.2rem;
  width: calc(100% + 4rem);
  padding: 0 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`;

const BookBoxUI = styled.div`
  flex-shrink: 0;
  width: 95%;
  transition: all ease 0.2s;
`;

const LineUI = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: var(--color-neutral-400);
`;

const LineProgressUI = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: var(--color-neutral-600);
  width: ${props => (1 / props.$numItems) * 100}%;
`;

SortedBooksMobile.propTypes = sortedBooksTypes;

export default SortedBooksMobile;
