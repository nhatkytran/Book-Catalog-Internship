import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

function BookSubInfo({ content }) {
  return (
    <StyledBookSubInfo>
      <AiFillCaretRight />
      <p>{content}</p>
    </StyledBookSubInfo>
  );
}

const StyledBookSubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-neutral-500);
  font-size: 1.3rem;
  font-weight: 500;

  svg {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    fill: var(--color-neutral-500);
  }

  p {
    position: relative;
    top: 1px;
  }
`;

BookSubInfo.propTypes = { content: PropTypes.string.isRequired };

export default BookSubInfo;
