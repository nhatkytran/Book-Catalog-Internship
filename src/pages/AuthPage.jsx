import styled from 'styled-components';

import { useUser } from '~/hooks';
import { AuthErrorMessage, AuthLoader } from '~/components';
import { AuthLoginForm } from '~/features/auth';
import { AuthUser } from '~/features/auth';

function AuthPage() {
  const { isPending, isError, error, data: user } = useUser();

  return (
    <StyledAuthPage>
      {isPending && <AuthLoader />}
      {isError && <AuthErrorMessage errorMessage={error.message} />}
      {!isPending && !isError && user ? <AuthUser /> : <AuthLoginForm />}
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

export default AuthPage;
