import styled, { css } from 'styled-components';
import { Loader } from '.';

function LoaderFullPage() {
  return (
    <StyledLoaderFullPage>
      <Loader UI={LoaderUI} />
    </StyledLoaderFullPage>
  );
}

const StyledLoaderFullPage = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoaderUI = css`
  fill: var(--color-white);
`;

export default LoaderFullPage;
