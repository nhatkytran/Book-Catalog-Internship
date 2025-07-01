import { useQuery } from '@tanstack/react-query';
import { authStateChange } from '~/services';

/** A custom hook that fetches the current user's authentication state. */
function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: authStateChange });
}

export default useUser;
