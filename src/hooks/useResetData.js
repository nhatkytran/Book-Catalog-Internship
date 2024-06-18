import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function useResetData({ resetKey, resetFn }) {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, mutate } = useMutation({
    mutationFn: resetFn,
    onSuccess: () => {
      toast.success('Reset data successfully.');

      ['year', 'sortBy', 'page'].forEach(query => searchParams.delete(query));
      setSearchParams(searchParams);

      queryClient.invalidateQueries({ queryKey: [resetKey] });
    },
    onError: () => toast.error('Something went wrong!'),
  });

  return { isPending, mutate };
}

export default useResetData;
