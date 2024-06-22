import styled from 'styled-components';
import { func, any } from 'prop-types';

import { AuthLoginForm } from '~/features/auth';
import { AuthUser } from '~/features/auth';

function AuthPage({ ProtectLoader, ProtectError, user }) {
  return (
    <StyledAuthPage>
      <ProtectLoader />
      <ProtectError />
      {user ? <AuthUser email={user.email} /> : <AuthLoginForm />}
    </StyledAuthPage>
  );
}

const StyledAuthPage = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: var(--font-poppins);
  padding: 2rem 2.4rem;
`;

AuthPage.propTypes = { ProtectLoader: func, ProtectError: func, user: any };

export default AuthPage;
