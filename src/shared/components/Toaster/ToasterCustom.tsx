import { Toaster } from 'react-hot-toast';

export const ToasterCustom = () => {
  return (
    <Toaster
      position='top-center'
      reverseOrder={false}
      toasterId='default'
      toastOptions={{
        className: '',
        duration: 5000,
        removeDelay: 10000,
        error: {
          icon: '🚨',
          style: {
            display: 'flex',
            border: '1px solid #f9373f',
            background: '#f4e8e3',
            color: '#0a0000',
            minWidth: '200px',
            justifyContent: 'center',
            textAlign: 'left'
          }
        }
      }}
    />
  );
};
