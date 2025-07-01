import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from '~/App';
import GlobalStyles from '~/styles/GlobalStyles';
import { ErrorFallback } from '~/pages';

/** The query client for React Query. */
const queryClient = new QueryClient();

/** The main entry point of the application. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
