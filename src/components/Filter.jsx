import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';

import { px400 } from '~/styles/GlobalStyles';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = value => {
    searchParams.set(filterField, value);

    if (value === 'all') searchParams.delete(filterField);
    searchParams.delete('page');

    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option, index) => (
        <FilterButtonUI
          key={index}
          onClick={() => handleClick(option.value)}
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
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
