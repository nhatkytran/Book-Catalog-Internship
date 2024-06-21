import { useQuery } from '@tanstack/react-query';
import { getAllBooks } from '~/services';

function useAllBooks() {
  return useQuery({ queryKey: ['books'], queryFn: getAllBooks });
}

export default useAllBooks;
