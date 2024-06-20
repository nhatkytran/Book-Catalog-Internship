import styled from 'styled-components';
import { any } from 'prop-types';

import { HeadingUI } from '~/ui';
import { Filter } from '~/components';
import { px500, px600 } from '~/styles/GlobalStyles';
import { SortedBooksDesktop } from '~/features/home';

function AllBooks({ groupedBooks }) {
  console.log(groupedBooks);
  const book1 = {
    year: 2021,
    books: [
      {
        id: '1',
        name: 'The Inmates Are Running the Asylum',
        authors: ['Cooper, Alan'],
        publicationYear: 2004,
        rating: 8,
        isbn: 9780672326141,
      },
      {
        id: '2',
        name: 'The Three Musketeers',
        authors: ['Alexandre Dumas'],
      },
      {
        id: '3',
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        authors: ['Robert C. Martin'],
        publicationYear: 2008,
        rating: 9,
        isbn: 9780132350884,
      },
      {
        id: '4',
        name: 'George and the Big Bang',
        authors: ['Hawking', 'Stephen', 'Lucy'],
        publicationYear: 2013,
        isbn: 9781442440067,
      },
    ],
  };

  return (
    <StyledAllBooks>
      <HeaderUI>
        <HeadingUI as="h1">All books</HeadingUI>

        <FilterBoxUI>
          <p>Group by:</p>
          <Filter
            filterField="filter"
            options={[
              { value: 'all', label: 'Year' },
              { value: 'author', label: 'Author' },
              { value: 'rating', label: 'Rating' },
            ]}
          />
        </FilterBoxUI>
      </HeaderUI>

      <BodyUI>
        <SortedBooksDesktop category={book1.year} books={book1.books} />
        <SortedBooksDesktop category={book1.year} books={book1.books} />
      </BodyUI>
    </StyledAllBooks>
  );
}

const StyledAllBooks = styled.div`
  font-family: var(--font-poppins);
  padding-top: 2rem;
  border-top: 1px solid var(--color-neutral-300);
`;

const HeaderUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;

  @media only screen and (max-width: ${px500}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const FilterBoxUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const BodyUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  margin-top: 2rem;

  @media only screen and (max-width: ${px600}) {
    gap: 2.2rem;
  }
`;

AllBooks.propTypes = { groupedBooks: any };

export default AllBooks;
