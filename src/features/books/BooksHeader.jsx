import styled from 'styled-components';
import { HeadingUI } from '~/ui';
import { BooksTableOperations } from '.';

/** Header component for the books section displaying the page title and table operations controls. */
function BooksHeader() {
  return (
    <StyledBooksHeader>
      <HeadingUI as="h1">All books</HeadingUI>
      <BooksTableOperations />
    </StyledBooksHeader>
  );
}

const StyledBooksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
`;

export default BooksHeader;
