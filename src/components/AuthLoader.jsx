import styled from 'styled-components';
import { Loader } from '.';

/** Authentication loader component. */
function AuthLoader() {
  return (
    <StyledAuthLoader>
      <Loader />
    </StyledAuthLoader>
  );
}

const StyledAuthLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default AuthLoader;
