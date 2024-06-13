import styled from 'styled-components';
import PropTypes from 'prop-types';

import { px1000, px1200 } from '~/styles/GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />

      <ContentUI>
        <Sidebar />

        <MainViewUI>
          {children}

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

Layout.propTypes = { children: PropTypes.element.isRequired };

export default Layout;
