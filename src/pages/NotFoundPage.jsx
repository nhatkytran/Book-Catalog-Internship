import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonMain } from '~/components';
import { ButtonErrorUI, ErrorContainerUI, ErrorMessageUI, HeadingUI } from '~/ui';

/** * Not found page component. */
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <ErrorContainerUI>
        <ErrorMessageUI>Error 404</ErrorMessageUI>
        <HeadingUI as="h2">
          {"Oops! We couldn't find what you're looking for."}
        </HeadingUI>
        <ButtonMain
          UI={ButtonErrorUI}
          onClick={() => navigate('/', { replace: true })}
        >
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
