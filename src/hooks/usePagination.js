import { useSearchParams } from "react-router-dom";
import { PAGE_NUMBER, PAGE_SIZE } from "~/config";

/**
 * Manages pagination state and navigation using URL search parameters.
 * @param {number} count - The total number of items to paginate.
 * @returns {Object} An object containing pagination state and methods
 * @property {number} currentPage - The current page number.
 * @property {number} pageCount - The total number of pages.
 * @property {Function} nextPage - Function to navigate to the next page.
 * @property {Function} prevPage - Function to navigate to the previous page.
 */
function usePagination(count) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || PAGE_NUMBER;
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

  return { currentPage, pageCount, nextPage, prevPage };
}

export default usePagination;
