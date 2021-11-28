import { lazy } from 'react';

import { CATEGORY_ROUTER_PATH } from '../constants/subject.paths';

const CATEGORY_SUBJECT_SCREEN = {
  id: 'id_subject',
  pageTitle: 'Quản trị môn học',
  path: CATEGORY_ROUTER_PATH.LIST,
  component: lazy(() => import('../screens/CategorySubjectScreen')),
  isPrivateRoute: true,
};

export const CATEGORY_SUBJECT_ROUTES = [CATEGORY_SUBJECT_SCREEN];
