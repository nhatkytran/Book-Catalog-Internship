import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { logout } from '~/services';
import { handleMutateError } from '~/utils';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success('Log out successfully.');
      queryClient.removeQueries();
      navigate('/', { replace: true });
    },
    onError: handleMutateError,
  });
};

export default useLogout;
