import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { number } from 'prop-types';

import { PAGE_SIZE } from '~/config';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function BooksTablePagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    if (prev !== 1) searchParams.set('page', prev);
    else searchParams.delete('page');

    setSearchParams(searchParams);
  }

  return (
    <StyledBooksTablePagination>
      {pageCount <= 1 && (
        <CountUI>
          Showing <span>{count}</span> result{count > 1 && 's'}
        </CountUI>
      )}

      {pageCount > 1 && (
        <>
          <CountUI>
            Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
            <span>
              {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
            </span>{' '}
            of <span>{count}</span> results
          </CountUI>

          <ButtonsBoxUI>
            <ButtonUI disabled={currentPage === 1} onClick={prevPage}>
              <HiChevronLeft />
              Prev
            </ButtonUI>

            <ButtonUI disabled={currentPage === pageCount} onClick={nextPage}>
              Next
              <HiChevronRight />
            </ButtonUI>
          </ButtonsBoxUI>
        </>
      )}
    </StyledBooksTablePagination>
  );
}

const StyledBooksTablePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CountUI = styled.div`
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const ButtonsBoxUI = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const ButtonUI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius-sm);
  transition: all ease 0.2s;

  &:first-child {
    padding-left: 0.4rem;
  }

  &:last-child {
    padding-right: 0.4rem;
  }

  &:disabled svg {
    fill: var(--color-neutral-700);
  }

  & svg {
    height: 1.4rem;
    width: 1.4rem;
    fill: #000;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-blue-600);
    color: var(--color-neutral-50);
  }
`;

BooksTablePagination.propTypes = { count: number.isRequired };

export default BooksTablePagination;
