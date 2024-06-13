import styled from 'styled-components';
import { HeadingUI } from '~/ui';

function BooksHeader() {
  return (
    <StyledBooksHeader>
      <HeadingUI as="h1">All books</HeadingUI>
    </StyledBooksHeader>
  );
}

const StyledBooksHeader = styled.div``;

export default BooksHeader;
