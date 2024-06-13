import { MAIN_LAYOUT, NONE_LAYOUT } from '~/config';
import { HomePage, NotFoundPage, DashboardPage } from '~/pages';

const publicRoutes = [
  {
    path: '/',
    component: HomePage,
    layout: MAIN_LAYOUT,
    banner: { url: '/images/banner.jpeg', text: 'Find your favorite books' },
  },
  { path: '/dashboard', component: DashboardPage, layout: NONE_LAYOUT },
  { path: '/*', component: NotFoundPage, layout: NONE_LAYOUT },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
