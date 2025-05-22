import { useState } from 'react';
import styled, { css } from 'styled-components';
import { func, bool, any } from 'prop-types';

import { useWindowEventListener } from '~/hooks';
import { FeatureNotSupported, LoginRedirect, ResetData } from '~/components';
import { BooksAddMore, BooksHeader, BooksTable } from '~/features/books';

const VIEWPORT_WIDTH_THRESHOLD = 800;
const checkViewportSupport = () => window.innerWidth >= VIEWPORT_WIDTH_THRESHOLD;
const FEATURE_NOT_SUPPORTED_CONTENT = `
  This feature is available only on devices with a viewport width of ${VIEWPORT_WIDTH_THRESHOLD}px or larger.
  Please adjust your browser window size or use a larger screen.
`;

/**
 * Main page component that displays the book catalog and related functionality.
 * Includes viewport size checking and authentication handling.
 */
function AllBooksPage({ ProtectLoader, ProtectError, isAuthReady, user }) {
  const [isViewportSupported, setIsViewportSupported] = useState(checkViewportSupport);

  useWindowEventListener({
    eventName: 'resize',
    handler: () => setIsViewportSupported(checkViewportSupport),
  });

  if (!isViewportSupported)
    return <FeatureNotSupported content={FEATURE_NOT_SUPPORTED_CONTENT} />;

  return (
    <StyledAllBooksPage>
      <ProtectLoader />
      <ProtectError />
      {isAuthReady && (user ? (
        <>
          <BooksHeader />
          <BoxUI>
            <BooksTable />
            <BooksAddMore />
          </BoxUI>
          <ResetData />
        </>
      ) : <LoginRedirect />)}
    </StyledAllBooksPage>
  );
}

const CommonDisplay = css`
  display: flex;
  flex-direction: column;
`;

const StyledAllBooksPage = styled.div`
  flex: 1;
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

AllBooksPage.propTypes = {
  ProtectLoader: func,
  ProtectError: func,
  isAuthReady: bool,
  user: any,
};

export default AllBooksPage;
