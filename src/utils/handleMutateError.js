import toast from 'react-hot-toast';

const handleMutateError = error => {
  if (process.env.NODE_ENV === 'development') console.error(error);
  toast.error(error.message);
};

export default handleMutateError;
