import styled from 'styled-components';
import { Filter, SortBy } from '~/components';

// Filter data.
const FILTER_FIELD = 'year';
const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'no-year', label: 'No year' },
  { value: 'with-year', label: 'With year' },
];

// Sort data.
const SORT_BY_FIELD = 'sortBy';
const SORT_BY_OPTIONS = [
  { value: 'default', label: 'Default (newest first)' },
  { value: 'name-asc', label: 'Sort by name (A-Z)' },
  { value: 'name-desc', label: 'Sort by name (Z-A)' },
  { value: 'publicationYear-asc', label: 'Sort by publication year (lowest first)' },
  { value: 'publicationYear-desc', label: 'Sort by publication year (highest first)' },
  { value: 'rating-asc', label: 'Sort by rating (lowest first)' },
  { value: 'rating-desc', label: 'Sort by rating (highest first)' },
];

/**
 * A compound component that groups filtering and sorting controls for the books table.
 * It renders a Filter bar and a SortBy dropdown with predefined options.
 */
function BooksTableOperations() {
  return (
    <StyledBooksTableOperations>
      <Filter filterField={FILTER_FIELD} options={FILTER_OPTIONS} />
      <SortBy sortByField={SORT_BY_FIELD} options={SORT_BY_OPTIONS} />
    </StyledBooksTableOperations>
  );
}

const StyledBooksTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default BooksTableOperations;
