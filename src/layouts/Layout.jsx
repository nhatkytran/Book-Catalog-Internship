import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MAIN_LAYOUT } from '~/config';
import { LayoutUI } from '~/ui';
import { px1000 } from '~/styles/GlobalStyles';
import { Banner, Footer, Header, Sidebar } from '~/layouts';

function Layout({ children, type, banner }) {
  return (
    <LayoutUI>
      <Header />

      <ContentUI>
        <Sidebar />

        <MainViewUI>
          <MainViewHeaderUI>
            {type === MAIN_LAYOUT && (
              <Banner url={banner.url} text={banner.text} />
            )}

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
  min-height: 50rem;
`;

const MainViewHeaderUI = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-100);
  position: relative;
`;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  banner: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Layout;
