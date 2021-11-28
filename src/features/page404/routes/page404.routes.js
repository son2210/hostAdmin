import { lazy } from 'react';

const PAGE404_SCREEN = {
  id: 'id_page404',
  path: '*',
  component: lazy(() => import('./../screens/Page404Screen')),
  isAuthRoute: false,
};

export const PAGE404_ROUTES = [PAGE404_SCREEN];
