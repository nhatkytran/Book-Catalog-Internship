import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillProduct } from 'react-icons/ai';

import { px1000 } from '~/styles/GlobalStyles';

const navItems = [
  { link: '/', icon: AiFillHome, content: 'All books' },
  { link: '/dashboard', icon: AiFillProduct, content: 'Dashboard' },
];

function Sidebar() {
  return (
    <StyledSidebar>
      <ListUI>
        {navItems.map((navItem, index) => {
          const { link, icon: Icon, content } = navItem;

          return (
            <ItemUI key={index}>
              <LinkUI to={link}>
                <Icon />
                <p>{content}</p>
              </LinkUI>
            </ItemUI>
          );
        })}
      </ListUI>

      <LegalTextUI>© 2017 by trillo. All rights reserved.</LegalTextUI>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333;
`;

const ListUI = styled.ul`
  font-size: 1.4rem;
  margin-top: 3.5rem;
`;

const ItemUI = styled.li`
  position: relative;

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: var(--color-orange-500);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }
`;

const LinkUI = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    color: var(--color-neutral-100);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1.5rem 3rem;
    position: relative;

    svg {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 1.6rem;
      fill: currentColor;
    }
  }
`;

const LegalTextUI = styled.div`
  color: var(--color-neutral-300);
  font-size: 1.2rem;
  text-align: center;
  padding: 2.5rem;

  @media only screen and (max-width: ${px1000}) {
    display: none;
  }
`;

export default Sidebar;
