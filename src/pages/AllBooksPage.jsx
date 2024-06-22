import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { func, bool, any } from 'prop-types';

import { useWindowEventListener } from '~/hooks';
import { FeatureNotSupported, ResetData } from '~/components';
import { BooksAddMore, BooksHeader, BooksTable } from '~/features/books';

const checkViewPort800 = () => window.innerWidth >= 800;

function AllBooksPage({ ProtectLoader, ProtectError, isAuthReady, user }) {
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
      <ProtectLoader />
      <ProtectError />

      {isAuthReady && (
        <>
          {user ? (
            <>
              <BooksHeader />

              <BoxUI>
                <BooksTable />
                <BooksAddMore />
              </BoxUI>

              <ResetData />
            </>
          ) : (
            <Navigate to="/auth" replace={true} />
          )}
        </>
      )}
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

AllBooksPage.propTypes = {
  ProtectLoader: func,
  ProtectError: func,
  isAuthReady: bool,
  user: any,
};

export default AllBooksPage;
