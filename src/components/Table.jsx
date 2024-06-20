import { createContext, useContext } from 'react';
import styled from 'styled-components';
import { arrayOf, node, string, object, func } from 'prop-types';

import { TableBodyMessageUI } from '~/ui';

// Context API //////////

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

// Components //////////

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <TableBodyMessageUI>No data to show at the moment</TableBodyMessageUI>
    );

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}

// Styles //////////

const StyledTable = styled.div`
  background-color: var(--color-neutral-100);
  font-size: 1.4rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-neutral-300);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  color: var(--color-neutral-600);
  font-family: var(--font-poppins);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-neutral-200);
`;

const StyledBody = styled.section`
  margin: 0;
`;

const StyledRow = styled(CommonRow)`
  background-color: var(--color-neutral-50);
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }
`;

const Footer = styled.footer`
  display: grid;
  place-items: center;
  padding: 1.2rem;
`;

// Compound Components //////////

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

// PropTypes //////////

const childrenProp = { children: node.isRequired };
const columnsProp = { columns: string.isRequired };
const dataProp = { data: arrayOf(object).isRequired };
const renderProp = { render: func.isRequired };

Table.propTypes = { ...childrenProp, ...columnsProp };
Header.propTypes = { ...childrenProp };
Row.propTypes = { ...childrenProp };
Body.propTypes = { ...dataProp, ...renderProp };

export default Table;
