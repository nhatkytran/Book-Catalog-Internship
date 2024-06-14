import styled from 'styled-components';
import { Filter, SortBy } from '~/components';

function BooksTableOperations() {
  return (
    <StyledBooksTableOperations>
      <Filter
        filterField="year"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-year', label: 'No year' },
          { value: 'with-year', label: 'With year' },
        ]}
      />

      <SortBy
        options={[
          { value: 'default', label: 'Default' },
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'year-asc', label: 'Sort by publication year (low first)' },
          {
            value: 'year-desc',
            label: 'Sort by publication year (high first)',
          },
          { value: 'rating-asc', label: 'Sort by rating (low first)' },
          { value: 'rating-desc', label: 'Sort by rating (high first)' },
        ]}
      />
    </StyledBooksTableOperations>
  );
}

const StyledBooksTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default BooksTableOperations;
