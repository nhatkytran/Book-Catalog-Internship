import styled from 'styled-components';
import { any, func } from 'prop-types';

import { ButtonMain } from '~/components';

import {
  ButtonErrorUI,
  ErrorContainerUI,
  ErrorMessageUI,
  HeadingUI,
  LayoutUI,
} from '~/ui';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledErrorFallback>
      <ErrorContainerUI>
        <ErrorMessageUI>{error.message}</ErrorMessageUI>

        <HeadingUI as="h2">Something went wrong!</HeadingUI>

        <ButtonMain UI={ButtonErrorUI} onClick={resetErrorBoundary}>
          Go Home
        </ButtonMain>
      </ErrorContainerUI>
    </StyledErrorFallback>
  );
}

const StyledErrorFallback = styled(LayoutUI)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

ErrorFallback.propTypes = {
  error: any.isRequired,
  resetErrorBoundary: func.isRequired,
};

export default ErrorFallback;
