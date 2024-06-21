import styled from 'styled-components';
import { string } from 'prop-types';
import { TableBodyMessageUI } from '~/ui';

function AuthErrorMessage({ errorMessage = 'Something went wrong!' }) {
  return (
    <StyledAuthErrorMessage>
      <TableBodyMessageUI $color="red">{errorMessage}</TableBodyMessageUI>
    </StyledAuthErrorMessage>
  );
}

const StyledAuthErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

AuthErrorMessage.propTypes = { errorMessage: string };

export default AuthErrorMessage;
