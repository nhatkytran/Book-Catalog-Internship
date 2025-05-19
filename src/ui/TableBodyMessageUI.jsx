import styled, { css } from 'styled-components';

const TableBodyMessageUI = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  margin: 4.8rem 2.4rem;

  ${props => props.$color === 'red' && css`color: var(--color-red-500);`};
  ${props => props.$noMargin && css`margin: 0;`};
`;

export default TableBodyMessageUI;
