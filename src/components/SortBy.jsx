import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function SortBy({ sortByField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSortBy = searchParams.get(sortByField) || options[0].value;

  const handleChange = event => {
    const value = event.target.value;

    searchParams.set(sortByField, value);

    if (value === 'default') searchParams.delete(sortByField);
    searchParams.delete('page');

    setSearchParams(searchParams);
  };

  return (
    <StyledSortBy value={currentSortBy} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
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
`;

SortBy.propTypes = {
  sortByField: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ).isRequired,
};

export default SortBy;

// function SortBy({ options }) {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortBy = searchParams.get('sortBy') || '';

//   function handleChange(e) {
//     searchParams.set('sortBy', e.target.value);
//     setSearchParams(searchParams);
//   }

//   return (
//     <Select
//       options={options}
//       type="white"
//       value={sortBy}
//       onChange={handleChange}
//     />
//   );
// }
