import { MAIN_LAYOUT, NONE_LAYOUT } from '~/config';
import { AllBooksPage, AuthPage, HomePage, NotFoundPage } from '~/pages';

const routes = [
  {
    path: '/',
    component: HomePage,
    layout: MAIN_LAYOUT,
    banner: { url: '/images/banner.jpeg', text: 'Find your favorite books' },
  },
  { path: '/books', component: AllBooksPage, layout: NONE_LAYOUT },
  { path: '/auth', component: AuthPage, layout: NONE_LAYOUT },
  { path: '/*', component: NotFoundPage, layout: NONE_LAYOUT },
];

export default routes;
