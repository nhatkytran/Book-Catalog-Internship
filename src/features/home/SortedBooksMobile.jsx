import styled from 'styled-components';

import { sortedBooksTypes } from '~/types';
import { HeadingUI } from '~/ui';
import { Book } from '.';
import useDragItems from '~/hooks/useDragItems';

function SortedBooksMobile({ category, books }) {
  // Make sure class name of books are different when this component is reused
  const bookClassName = `book-mobile-${Math.random()
    .toString()
    .slice(2)}-${Date.now()}`;

  const { containerRef } = useDragItems({
    itemsClassName: bookClassName,
    itemsLength: books.length,
    itemsGap: 12, // In CSS -> 1.2rem
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
    </StyledSortedBooksMobile>
  );
}

const StyledSortedBooksMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1.6rem;
`;

const BodyUI = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow: hidden;
  width: calc(100% + 4rem);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 2rem;
  overflow: hidden;
`;

const BookBoxUI = styled.div`
  flex-shrink: 0;
  width: 95%;
  transition: all ease 0.2s;
`;

SortedBooksMobile.propTypes = sortedBooksTypes;

export default SortedBooksMobile;
