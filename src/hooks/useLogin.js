import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login } from '~/services';
import { handleMutateError } from '~/utils';

const VIEWPORT_WIDTH_THRESHOLD = 800;

/**
 * Custom hook for handling user login functionality.
 * Manages the login mutation, success/error states, and navigation after login.
 */
const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      toast.success('Log in successfully.');
      queryClient.setQueryData(['user'], user);
      navigate(window.innerWidth >= VIEWPORT_WIDTH_THRESHOLD ? '/books' : '/', { replace: true });
    },
    onError: handleMutateError,
  });
};

export default useLogin;
