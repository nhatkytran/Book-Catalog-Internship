import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { px1000, px600, px700 } from '~/styles/GlobalStyles';
import { LegalText } from '~/components';

const links = [
  { link: '/cookie-preferences', content: 'Cookie preferences' },
  { link: '/terms-conditions', content: 'Terms & Conditions' },
  { link: '/privacy-policy', content: 'Privacy Policy' },
];

/** Renders the application footer with legal text and navigation links. */
function Footer() {
  return (
    <StyledFooter>
      <LegalText UI={LegalTextUI} />
      <ListUI>
        {links.map(({ link, content }, index) => (
          <ItemUI key={index}>
            <LinkUI to={link}>{content}</LinkUI>
          </ItemUI>
        ))}
      </ListUI>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 5.4rem;
  background-color: var(--color-white);
  border-top: var(--line);

  @media only screen and (max-width: ${px1000}) {
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 0.4rem;
  }
  @media only screen and (max-width: ${px600}) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    padding: 1.5rem 2rem 1rem;
  }
`;

const LegalTextUI = styled.div`
  display: none;
  font-size: 1.2rem;
  text-align: center;
  margin-right: 3rem;

  @media only screen and (max-width: ${px1000}) {
    display: block;
  }
  @media only screen and (max-width: ${px700}) {
    margin-right: 0.8rem;
  }
`;

const ListUI = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${px600}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const ItemUI = styled.li`
  padding: 0 0.6rem;

  @media only screen and (max-width: ${px600}) {
    padding: 0;
  }

  &:not(:last-child) {
    margin-right: 3rem;

    @media only screen and (max-width: ${px700}) {
      margin-right: 0.4rem;
    }
    @media only screen and (max-width: ${px600}) {
      margin-right: 1.4rem;
    }
  }
`;

const LinkUI = styled(Link)`
  &:link,
  &:visited {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 1rem;

    &:hover {
      color: var(--color-blue-700);
    }

    @media only screen and (max-width: ${px600}) {
      padding: 0.5rem 0;
    }
  }
`;

export default Footer;
