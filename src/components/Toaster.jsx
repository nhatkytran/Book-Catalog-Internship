import { Toaster as ReactHotToaster } from 'react-hot-toast';
// https://react-hot-toast.com/

function Toaster() {
  return (
    <ReactHotToaster
      position="top-right"
      gutter={12}
      containerStyle={{ margin: '0.8rem' }}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
        style: {
          backgroundColor: 'var(--color-neutral-50)',
          color: 'var(--color-neutral-700)',
          fontFamily: 'var(--font-poppins)',
          fontWeight: '500',
          fontSize: '1.4rem',
          maxWidth: '50rem',
          padding: '1.2rem 2rem',
        },
      }}
    />
  );
}

export default Toaster;
