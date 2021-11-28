import { lazy } from 'react';

import { SEMESTER_PATH } from './../constants/semester.paths';

const SEMESTER_SCREEN = {
  id: 'id_semester',
  path: SEMESTER_PATH.LIST,
  component: lazy(() => import('./../screens/SemesterScreen/SemesterScreen')),
  pageTitle: 'Quản trị kỳ học',
  isPrivateRoute: true,
};

export const SEMESTER_ROUTES = [SEMESTER_SCREEN];
