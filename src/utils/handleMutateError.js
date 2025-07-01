import toast from 'react-hot-toast';

/**
 * Handles mutate errors.
 * @param {Error} error - The error to handle.
 */
const handleMutateError = error => {
  if (process.env.NODE_ENV === 'development') console.error(error);
  toast.error(error.message);
};

export default handleMutateError;
