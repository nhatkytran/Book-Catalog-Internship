import { MAIN_LAYOUT, NONE_LAYOUT } from '~/config';
import { AllBooksPage, Auth, HomePage, NotFoundPage } from '~/pages';

const publicRoutes = [
  {
    path: '/',
    component: HomePage,
    layout: MAIN_LAYOUT,
    banner: { url: '/images/banner.jpeg', text: 'Find your favorite books' },
  },
  { path: '/books', component: AllBooksPage, layout: NONE_LAYOUT },
  { path: '/auth', component: Auth, layout: NONE_LAYOUT },
  { path: '/*', component: NotFoundPage, layout: NONE_LAYOUT },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
