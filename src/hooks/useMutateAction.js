import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { handleMutateError } from '~/utils';

function useMutateAction({ key, actionFn }) {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, mutate } = useMutation({
    mutationFn: actionFn,
    onSuccess: () => {
      toast.success('Action performed successfully.');

      ['year', 'sortBy', 'page'].forEach(query => searchParams.delete(query));
      setSearchParams(searchParams);

      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: handleMutateError,
  });

  return { isPending, mutate };
}

export default useMutateAction;
