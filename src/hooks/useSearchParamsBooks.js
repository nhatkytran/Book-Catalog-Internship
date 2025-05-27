import { useSearchParams } from 'react-router-dom';
import { PAGE_NUMBER, PAGE_SIZE } from '~/config';

/**
 * Handles filtering, sorting, and pagination of books based on URL search parameters.
 * @param {Array} [booksData=[]] - An array of book objects to be processed.
 * @returns {Object} An object containing:
 *   - books {Array} - The processed array of books after applying all filters, sorting, and pagination.
 *   - totalBooks {number} - The total number of books before pagination is applied.
 */
function useSearchParamsBooks(booksData = []) {
  const [searchParams] = useSearchParams();
  let books = booksData;

  // Filter action.
  const filter = searchParams.get('year');
  if (filter === 'no-year') books = books.filter(book => !book.publicationYear);
  if (filter === 'with-year') books = books.filter(book => book.publicationYear);
  
  // Sort action.
  const sortBy = searchParams.get('sortBy');
  books = books.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // Newest created book comes first.

  if (sortBy) {
    const [field, direction] = sortBy.split('-');
    const modifier = direction === 'asc' ? 1 : -1;

    if (field === 'name') books = books.sort((a, b) => (a.name <= b.name ? -1 : 1) * modifier);

    if (field === 'publicationYear') {
      books = books.sort((a, b) => {
        let side;

        if (a.publicationYear && b.publicationYear) side = a.publicationYear - b.publicationYear;
        if (!a.publicationYear && b.publicationYear) side = -1;
        if (a.publicationYear && !b.publicationYear) side = 1;

        return side * modifier;
      });
    }

    if (field === 'rating') books = books.sort((a, b) => (a.rating - b.rating) * modifier);
  }

  // Pagination action.
  const page = Number(searchParams.get('page')) || PAGE_NUMBER;
  books = books.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return { books, totalBooks: booksData.length};
}

export default useSearchParamsBooks;