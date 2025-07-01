import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';

/**
 * A reusable sort component that renders a dropdown for sorting options and manages URL search parameters.
 * Updates the URL when a sort option is selected and resets pagination.
 * @param {string} sortByField - The URL parameter key for the sort field.
 * @param {Array<{value: string, label: string}>} options - Array of sort options.
 */
function SortBy({ sortByField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortBy = searchParams.get(sortByField) || options[0].value;

  const handleChange = event => {
    const value = event.target.value;
    searchParams.set(sortByField, value);
    searchParams.delete('page');
    if (value === 'default') searchParams.delete(sortByField);
    setSearchParams(searchParams);
  };

  return (
    <StyledSortBy value={currentSortBy} onChange={handleChange}>
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </StyledSortBy>
  );
}

const StyledSortBy = styled.select`
  background-color: var(--color-neutral-50);
  color: var(--color-neutral-600);
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
`;

SortBy.propTypes = {
  sortByField: string.isRequired,
  options: arrayOf(shape({ value: string, label: string })).isRequired,
};

export default SortBy;
