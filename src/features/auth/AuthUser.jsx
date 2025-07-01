import styled, { css } from 'styled-components';
import { MdLogout } from 'react-icons/md';
import { string } from 'prop-types';

import { ButtonMain } from '~/components';
import { px400 } from '~/styles/GlobalStyles';
import { useLogout } from '~/hooks';

const PLACEHOLDER_NAME = 'Nhat Ky Tran';
const PLACEHOLDER_EMAIL = 'nhatky.tran.2002@saratasa.com';

/**
 * Authentication user component.
 * @param {Object} props - Component props.
 * @param {string} props.name - User name.
 * @param {string} props.email - User email.
 */
function AuthUser({ name = PLACEHOLDER_NAME, email = PLACEHOLDER_EMAIL }) {
  const { isPending, mutate: logout } = useLogout();

  return (
    <StyledAuthUser>
      <UserUI>
        <img src="/images/user.png" alt="Saritasa user" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </UserUI>
      <div>
        <ButtonMain
          UI={ButtonMainUI}
          disabled={isPending}
          onClick={() => logout()}
        >
          <p>Logout</p> <MdLogout />
        </ButtonMain>
      </div>
    </StyledAuthUser>
  );
}

const StyledAuthUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

const UserUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  @media only screen and (max-width: ${px400}) {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 4.6rem;
    height: 4.6rem;

    @media only screen and (max-width: ${px400}) {
      width: 6rem;
      height: 6rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    p {
      line-height: 1;

      &:first-child {
        font-weight: 500;
      }

      &:last-child {
        color: var(--color-neutral-600);
        font-size: 1.4rem;
      }
    }
  }
`;

const ButtonMainUI = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

AuthUser.propTypes = { name: string, email: string };

export default AuthUser;
