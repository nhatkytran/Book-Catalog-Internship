import { MAIN_LAYOUT, NONE_LAYOUT } from '~/config';
import { AllBooksPage, AuthPage, HomePage, NotFoundPage } from '~/pages';

/** Routes configuration. */
const routes = [
  {
    path: '/',
    component: HomePage,
    layout: MAIN_LAYOUT,
    isProtected: false,
    banner: {
      url: '/images/banner.jpeg',
      text: 'Find your favorite books',
    },
  },
  {
    path: '/books',
    component: AllBooksPage,
    layout: NONE_LAYOUT,
    isProtected: true,
    banner: null,
  },
  {
    path: '/auth',
    component: AuthPage,
    layout: NONE_LAYOUT,
    isProtected: true,
    banner: null,
  },
  {
    path: '/*',
    component: NotFoundPage,
    layout: NONE_LAYOUT,
    isProtected: false,
    banner: null,
  },
];

export default routes;
