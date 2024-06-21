import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login } from '~/services';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      toast.success('Log in successfully.');
      queryClient.setQueryData(['user'], user);
      navigate('/books', { replace: true });
    },
    onError: error => {
      if (process.env.NODE_ENV === 'development') console.error(error);
      toast.error(error.message);
    },
  });
};

export default useLogout;
