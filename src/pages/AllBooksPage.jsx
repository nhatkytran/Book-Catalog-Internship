import { useState } from 'react';
import styled, { css } from 'styled-components';

import { useWindowEventListener } from '~/hooks';
import { FeatureNotSupported, ResetData } from '~/components';
import { BooksAddMore, BooksHeader, BooksTable } from '~/features/books';

const checkViewPort800 = () => window.innerWidth >= 800;

function AllBooksPage() {
  const [isViewportSupported, setIsViewportSupported] =
    useState(checkViewPort800);

  useWindowEventListener({
    eventName: 'resize',
    handler: () => setIsViewportSupported(checkViewPort800),
  });

  if (!isViewportSupported)
    return (
      <FeatureNotSupported
        UI={NotSupportedUI}
        content="This feature is available only on devices with a viewport width of 800px
        or larger."
      />
    );

  return (
    <StyledAllBooksPage>
      <BooksHeader />

      <BoxUI>
        <BooksTable />
        <BooksAddMore />
      </BoxUI>

      <ResetData />
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

const NotSupportedUI = css`
  padding: 2rem;
`;

export default AllBooksPage;
