import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MAIN_LAYOUT } from '~/config';
import { px1000, px1200 } from '~/styles/GlobalStyles';
import Header from '~/layouts/Header';
import Sidebar from '~/layouts/Sidebar';
import Banner from '~/layouts/Banner';
import Footer from '~/layouts/Footer';

function Layout({ children, type, banner }) {
  return (
    <StyledLayout>
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
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  max-width: var(--width-main-layout);
  min-height: 50rem;
  background-color: var(--color-neutral-100);
  margin: 8rem auto;
  box-shadow: var(--shadow-lg);

  @media only screen and (max-width: ${px1200}) {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
`;

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
  background-color: var(--color-neutral-100);
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
