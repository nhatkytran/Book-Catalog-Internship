import { useQuery } from '@tanstack/react-query';
import { authStateChange } from '~/services';

function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: authStateChange });
}

export default useUser;
