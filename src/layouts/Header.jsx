import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { px1000, px400 } from '~/styles/GlobalStyles';

function Header() {
  return (
    <StyledHeader>
      <LinkUI to="/">
        <LogoDesktopUI src="/images/logo-desktop.svg" alt="Saritasa logo" />
        <LogoMobileUI src="/images/logo-mobile.svg" alt="Saritasa logo" />
      </LinkUI>
      <QuoteUI>
        A <span>Book</span> a day keeps <span>Reality</span> away.
      </QuoteUI>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  background-color: var(--color-white);
  font-size: 1.4rem;
  padding: 0 2rem;
  border-bottom: var(--line);

  @media only screen and (max-width: ${px1000}) {
    height: 5.4rem;
  }
`;

const LinkUI = styled(Link)`
  &:link,
  &:visited {
    color: transparent;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const LogoDesktopUI = styled.img`
  display: block;
  height: 3.8rem;

  @media only screen and (max-width: ${px1000}) {
    display: none;
  }
`;

const LogoMobileUI = styled.img`
  display: none;
  height: 3.2rem;

  @media only screen and (max-width: ${px1000}) {
    display: block;
  }
`;

const QuoteUI = styled.p`
  color: var(--color-black);
  font-size: 1.6rem;
  letter-spacing: 1px;
  word-spacing: 2px;

  @media only screen and (max-width: ${px400}) {
    font-size: 1.2rem;
    word-spacing: 0;
  }

  span {
    &:first-child {
      color: var(--color-orange-500);
    }

    &:last-child {
      color: var(--color-blue-500);
    }
  }
`;

export default Header;
