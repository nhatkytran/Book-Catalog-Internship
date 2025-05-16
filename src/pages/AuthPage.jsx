import styled from 'styled-components';
import { func, bool, any } from 'prop-types';

import { AuthLoginForm, AuthUser } from '~/features/auth';

function AuthPage({ ProtectLoader, ProtectError, isAuthReady, user }) {
  return (
    <StyledAuthPage>
      <ProtectLoader />
      <ProtectError />
      {isAuthReady && (user ? <AuthUser email={user.email} /> : <AuthLoginForm />)}
    </StyledAuthPage>
  );
}

const StyledAuthPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: var(--font-poppins);
  padding: 2rem 2.4rem;
`;

AuthPage.propTypes = {
  ProtectLoader: func,
  ProtectError: func,
  isAuthReady: bool,
  user: any,
};

export default AuthPage;
