import styled from 'styled-components';
import { string } from 'prop-types';

function HomeBookImage({ src = '/images/book.jpeg', alt = 'Saritasa book' }) {
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
