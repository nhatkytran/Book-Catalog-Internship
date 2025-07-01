import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';

import { px400 } from '~/styles/GlobalStyles';

/**
 * A reusable filter component that renders a list of filter buttons and manages URL search parameters.
 * Automatically updates the URL when a filter is selected and removes pagination parameters.
 * @param {string} filterField - The URL parameter key to use for this filter.
 * @param {Array<{value: string, label: string}>} options - Array of filter options.
 */
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = value => {
    searchParams.set(filterField, value);
    searchParams.delete('page');
    if (value === 'all') searchParams.delete(filterField);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map(({ value, label }, index) => (
        <FilterButtonUI
          key={index}
          $active={value === currentFilter}
          disabled={value === currentFilter}
          onClick={() => handleClick(value)}
        >
          {label}
        </FilterButtonUI>
      ))}
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  display: flex;
  gap: 0.4rem;
  background-color: var(--color-neutral-50);
  padding: 0.4rem;
  border: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);

  @media only screen and (max-width: ${px400}) {
    gap: 0.2rem;
  }
`;

const CommonButtonEffect = css`
  background-color: var(--color-blue-600);
  color: var(--color-neutral-50);
`;

const FilterButtonUI = styled.button`
  color: var(--color-neutral-600);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.44rem 0.8rem;
  border-radius: var(--border-radius-sm);
  transition: all ease 0.3s;

  &:hover:not(:disabled) {
    ${CommonButtonEffect};
  }

  ${props => props.$active && CommonButtonEffect}
`;

Filter.propTypes = {
  filterField: string.isRequired,
  options: arrayOf(shape({ value: string, label: string })).isRequired,
};

export default Filter;
