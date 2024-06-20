import styled, { css } from 'styled-components';

import { bookShape } from '~/types';
import { HeadingUI } from '~/ui';
import { HomeBookImage } from '~/components';
import { px600 } from '~/styles/GlobalStyles';

function Book({ book }) {
  return (
    <StyledBook key={book.id}>
      <HomeBookImage />

      <InformationBoxUI>
        <HeadingUI as="h5" $customStyles={HeaderCustomStylesUI}>
          {book.name}
        </HeadingUI>
        <AuthorsUI>By: {book.authors.join(', ')}</AuthorsUI>
      </InformationBoxUI>
    </StyledBook>
  );
}

const StyledBook = styled.figure`
  cursor: pointer;
`;

const InformationBoxUI = styled.div`
  font-family: var(--font-poppins);
  padding-top: 1rem;

  @media only screen and (max-width: ${px600}) {
    padding: 0.8rem 0;
  }
`;

const HeaderCustomStylesUI = css`
  -webkit-line-clamp: 1;
`;

const AuthorsUI = styled.p`
  color: var(--color-neutral-500);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: ${px600}) {
    margin-top: 0.2rem;
  }
`;

Book.propTypes = { book: bookShape };

export default Book;
