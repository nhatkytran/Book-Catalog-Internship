import styled from 'styled-components';

import { Loader } from '~/components';
import { TableBodyMessageUI } from '~/ui';
import { AuthLoginForm } from '~/features/auth';
import { AuthUser } from '.';
import { useUser } from '~/hooks';

function Auth() {
  const { isPending, isError, error, data: user } = useUser();

  return (
    <StyledAuth>
      {isPending && (
        <BoxUI>
          <Loader />
        </BoxUI>
      )}

      {isError && (
        <BoxUI>
          <TableBodyMessageUI $color="red">{error}</TableBodyMessageUI>
        </BoxUI>
      )}

      {!isPending && !isError && user ? <AuthUser /> : <AuthLoginForm />}
    </StyledAuth>
  );
}

const StyledAuth = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: var(--font-poppins);
  padding: 2rem 2.4rem;
`;

const BoxUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default Auth;
