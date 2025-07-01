import styled from 'styled-components';
import { shape, element, string } from 'prop-types';

import { MAIN_LAYOUT } from '~/config';
import { LayoutUI } from '~/ui';
import { px1000 } from '~/styles/GlobalStyles';
import { Banner, Footer, Header, Sidebar } from '~/layouts';

/**
 * A layout component that provides a consistent structure for pages.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed within the layout.
 * @param {string} props.type - The type of layout, either 'main' or 'sub'.
 * @param {Object} props.banner - The banner object containing the URL and text for the banner.
 */
function Layout({ children, type, banner }) {
  return (
    <LayoutUI>
      <Header />
      <ContentUI>
        <Sidebar />
        <MainViewUI>
          <MainViewHeaderUI>
            {type === MAIN_LAYOUT && <Banner url={banner.url} text={banner.text} />}
            {children}
          </MainViewHeaderUI>
          <Footer />
        </MainViewUI>
      </ContentUI>
    </LayoutUI>
  );
}

const ContentUI = styled.div`
  display: flex;

  @media only screen and (max-width: ${px1000}) {
    flex-direction: column;
  }
`;

const MainViewUI = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white);
  min-height: var(--width-sub-layout);
`;

const MainViewHeaderUI = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-100);
  position: relative;
`;

Layout.propTypes = {
  children: element.isRequired,
  type: string.isRequired,
  banner: shape({ url: string.isRequired, text: string.isRequired }),
};

export default Layout;
