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
        sortByField="sortBy"
        options={[
          { value: 'default', label: 'Default (newest first)' },
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          {
            value: 'publicationYear-asc',
            label: 'Sort by publication year (lowest first)',
          },
          {
            value: 'publicationYear-desc',
            label: 'Sort by publication year (highest first)',
          },
          { value: 'rating-asc', label: 'Sort by rating (lowest first)' },
          { value: 'rating-desc', label: 'Sort by rating (highest first)' },
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
