import styled, { css } from 'styled-components';
import { Loader } from '~/components';

function ResetData() {
  const loading = true;

  return (
    <StyledResetData>
      {loading && <Loader UI={LoaderUI} />}

      {!loading && (
        <>
          Feel free to play around with data.
          <ButtonBoxUI>
            Reset it here 👉 <button>Reset</button>
          </ButtonBoxUI>
        </>
      )}
    </StyledResetData>
  );
}

const CommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const StyledResetData = styled.div`
  ${CommonStyles};
  min-height: 5rem;
  background-color: var(--color-blue-100);
  color: var(--color-neutral-700);
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border-bottom: var(--line);
`;

const LoaderUI = css`
  fill: #1d4ed8;
`;

const ButtonBoxUI = styled.div`
  ${CommonStyles};

  button {
    color: var(--color-blue-600);
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-left: 0.4rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.3s ease 0s;
  }
`;

export default ResetData;
