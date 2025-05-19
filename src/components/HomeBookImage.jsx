import styled from 'styled-components';
import { string } from 'prop-types';

// Default url for the book image component.
const DEFAULT_BOOK_IMAGE = '/images/book.jpeg';

// Default alt text for the book image component.
const DEFAULT_ALT_TEXT = 'Saritasa book';

function HomeBookImage({ src = DEFAULT_BOOK_IMAGE, alt = DEFAULT_ALT_TEXT }) {
  return (
    <StyledHomeBookImage>
      <ImageUI src={src} alt={alt} draggable={false} />
    </StyledHomeBookImage>
  );
}

const StyledHomeBookImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 /1;
  background-color: var(--color-neutral-200);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-neutral-300);
  box-shadow: var(--shadow-sm);
`;

const ImageUI = styled.img`
  display: block;
  width: 64%;
`;

HomeBookImage.propTypes = { src: string, alt: string };

export default HomeBookImage;
