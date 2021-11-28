import { lazy } from 'react';

import { MAJORS_PATH } from './../constants/majors.paths';

const MAJORS_SCREEN = {
  id: 'id_majors',
  path: MAJORS_PATH.LIST,
  component: lazy(() => import('./../screens/MajorsScreen')),
  pageTitle: 'Quản trị chuyên ngành',
  isPrivateRoute: true,
};

export const MAJORS_ROUTES = [MAJORS_SCREEN];
