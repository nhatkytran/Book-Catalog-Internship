import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ButtonMain } from '~/components';

import {
  ButtonErrorUI,
  ErrorContainerUI,
  ErrorMessageUI,
  HeadingUI,
} from '~/ui';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <ErrorContainerUI>
        <ErrorMessageUI>Error 404</ErrorMessageUI>

        <HeadingUI as="h2">
          {"We can't find what you're looking for."}
        </HeadingUI>

        <ButtonMain UI={ButtonErrorUI} onClick={() => navigate('/')}>
          Go Home
        </ButtonMain>
      </ErrorContainerUI>
    </StyledPageNotFound>
  );
}

const StyledPageNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NotFoundPage;
