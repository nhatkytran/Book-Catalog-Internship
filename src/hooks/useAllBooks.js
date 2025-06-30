import { useQuery } from '@tanstack/react-query';
import { getAllBooks } from '~/services';

/**
 * A custom hook that fetches all books from the API.
 * @returns {Object} - The result of the query.
 */
function useAllBooks() {
  return useQuery({ queryKey: ['books'], queryFn: getAllBooks });
}

export default useAllBooks;
