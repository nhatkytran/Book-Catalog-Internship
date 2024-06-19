import styled from 'styled-components';

import { HeadingUI } from '~/ui';
import { Filter } from '~/components';
import { px500 } from '~/styles/GlobalStyles';

function AllBooks() {
  return (
    <StyledAllBooks>
      <HeaderUI>
        <HeadingUI as="h1">All books</HeadingUI>

        <FilterBoxUI>
          <p>Filter by:</p>
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

export default AllBooks;
