import { lazy } from 'react';

import ErrorFallback from '~/pages/ErrorFallback';
import NotFoundPage from '~/pages/NotFoundPage';
import AllBooksPage from '~/pages/AllBooksPage';
import AuthPage from '~/pages/AuthPage';

const HomePage = lazy(() => import('~/pages/HomePage'));

export { AllBooksPage, AuthPage, ErrorFallback, HomePage, NotFoundPage };
