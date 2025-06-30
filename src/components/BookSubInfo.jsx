import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';
import { string } from 'prop-types';

/**
 * Book sub info component.
 * @param {Object} props - Component props.
 * @param {string} props.content - Content of the book sub info.
 */
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

BookSubInfo.propTypes = { content: string.isRequired };

export default BookSubInfo;
