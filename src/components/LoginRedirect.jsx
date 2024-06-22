import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LoginRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    toast('Please log in first.', { icon: '👏' });
    navigate('/auth', { replace: true });
  }, [navigate]);

  return null;
}

export default LoginRedirect;
