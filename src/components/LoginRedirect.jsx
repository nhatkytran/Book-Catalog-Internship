import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

/**
 * A component that redirects to the login page if the user is not authenticated.
 * @param {Object} props - Component props.
 * @param {Function} props.navigate - Navigation function from react-router-dom.
 */
function LoginRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    toast('Please log in first.', { icon: '👏' });
    navigate('/auth', { replace: true });
  }, [navigate]);

  return null;
}

export default LoginRedirect;
