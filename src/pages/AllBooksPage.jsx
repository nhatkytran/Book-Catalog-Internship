import styled, { css } from 'styled-components';
import { BooksAddMore, BooksHeader, BooksTable } from '~/features/books';

function AllBooksPage() {
  return (
    <StyledAllBooksPage>
      <BooksHeader />

      <BoxUI>
        <BooksTable />
        <BooksAddMore />
      </BoxUI>
    </StyledAllBooksPage>
  );
}

const CommonDisplay = css`
  display: flex;
  flex-direction: column;
`;

const StyledAllBooksPage = styled.div`
  ${CommonDisplay};
  gap: 2.8rem;
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
`;

const BoxUI = styled.div`
  ${CommonDisplay};
  gap: 1.6rem;
`;

export default AllBooksPage;
