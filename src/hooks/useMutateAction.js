import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { handleMutateError } from '~/utils';

/**
 * A custom hook that performs a mutation and handles the result.
 * @param {Object} options - Configuration options for the hook.
 * @param {string} options.key - The key for the query client.
 * @param {Function} options.actionFn - The function to perform the mutation.
 */
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
