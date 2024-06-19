import styled, { css } from 'styled-components';
import toast from 'react-hot-toast';

import { HeadingUI } from '~/ui';
import { formatISBN13, formatPrice } from '~/utils';
import { BookSubInfo, ButtonMain } from '~/components';

const book = {
  name: 'The Clean Coder: A Code of Conduct for Professional Programmers',
  authors: ['Martin', 'Robert'],
  publicationYear: 2011,
  rating: 9,
  isbn: 9780137081073,
};

function RecommendedBook() {
  const { name, authors, publicationYear, rating, isbn } = book;

  const subInfos = [
    `First published in: ${publicationYear ? publicationYear : 'N/A'}`,
    `ISBN: ${isbn ? formatISBN13(isbn) : 'N/A'}`,
    `Rating: ${rating ? `${rating}/10 with 1000 votes` : 'No ratings yet'}`,
  ];

  return (
    <StyledRecommendedBook>
      <HeadingUI as="h1" $customStyles={HeadingStylesUI}>
        Recommended book
      </HeadingUI>

      <BoxUI>
        <BookBoxUI>
          <BookImageUI
            src="/images/book.jpeg"
            alt="Saritasa recommended book"
          />
        </BookBoxUI>

        <InformationBoxUI>
          <HeadingUI as="h5">{name}</HeadingUI>
          <AuthorsUI>By: {authors.join(', ')}</AuthorsUI>
          <PriceUI>{formatPrice({ amount: 1000 })}</PriceUI>

          <SubInfoUI>
            {subInfos.map((info, index) => (
              <BookSubInfo key={index} content={info} />
            ))}
          </SubInfoUI>

          <ButtonMain onClick={() => toast.success('Feature coming soon')}>
            Check details
          </ButtonMain>
        </InformationBoxUI>
      </BoxUI>
    </StyledRecommendedBook>
  );
}

const StyledRecommendedBook = styled.div``;

const HeadingStylesUI = css`
  line-height: 1;
`;

const BoxUI = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  margin-top: 2.8rem;
`;

const BookBoxUI = styled.div`
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

const BookImageUI = styled.img`
  display: block;
  width: 64%;
`;

const InformationBoxUI = styled.div`
  font-family: var(--font-poppins);
  padding: 2rem 0;
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
`;

const SubInfoUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2.8rem;
`;

export default RecommendedBook;
