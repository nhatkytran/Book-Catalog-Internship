import toast from 'react-hot-toast';
import styled from 'styled-components';
import { arrayOf } from 'prop-types';

import { HeadingUI } from '~/ui';
import { formatISBN13, formatPrice, selectRecommendBook } from '~/utils';
import { BookSubInfo, ButtonMain, HomeBookImage } from '~/components';
import { px700, px800 } from '~/styles/GlobalStyles';
import { bookShape } from '~/types';

/**
 * A component that displays a recommended book with its image and information.
 * @param {Object} props - Component props.
 * @param {Book[]} props.books - The array of books to select from.
 */
function RecommendedBook({ books }) {
  const { name, authors, publicationYear, rating, isbn } = selectRecommendBook(books);

  const subInfos = [
    `First published in: ${publicationYear ? publicationYear : 'N/A'}`,
    `ISBN: ${isbn ? formatISBN13(isbn) : 'N/A'}`,
    `Rating: ${rating ? `${rating}/10 with 1000 votes` : 'No ratings yet'}`,
  ];

  return (
    <StyledRecommendedBook>
      <HeadingUI as="h1">Recommended book</HeadingUI>
      <BoxUI>
        <HomeBookImage />
        <InformationBoxUI>
          <HeadingUI as="h5">{name}</HeadingUI>
          <AuthorsUI>By: {authors.join(', ')}</AuthorsUI>
          <PriceUI>{formatPrice({ amount: 1000 })}</PriceUI>
          <SubInfoUI>
            {subInfos.map((info, index) => (
              <BookSubInfo key={index} content={info} />
            ))}
          </SubInfoUI>
          <ButtonMain onClick={() => toast.success('Page details coming soon')}>
            Check details
          </ButtonMain>
        </InformationBoxUI>
      </BoxUI>
    </StyledRecommendedBook>
  );
}

const StyledRecommendedBook = styled.div``;

const BoxUI = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  margin: 2.8rem 0 3.6rem;

  @media only screen and (max-width: ${px800}) {
    gap: 2rem;
  }
  @media only screen and (max-width: ${px700}) {
    grid-template-columns: 1fr;
  }
`;

const InformationBoxUI = styled.div`
  font-family: var(--font-poppins);
  padding: 2rem 0;

  @media only screen and (max-width: ${px700}) {
    padding: 0;
  }
`;

const AuthorsUI = styled.p`
  color: var(--color-neutral-500);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const PriceUI = styled.p`
  color: var(--color-orange-600);
  font-weight: 500;
  letter-spacing: 1px;
  margin: 1.4rem 0;

  @media only screen and (max-width: ${px700}) {
    margin: 1rem 0;
  }
`;

const SubInfoUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2.8rem;

  @media only screen and (max-width: ${px700}) {
    margin-bottom: 2rem;
  }
`;

RecommendedBook.propTypes = { books: arrayOf(bookShape).isRequired };

export default RecommendedBook;
