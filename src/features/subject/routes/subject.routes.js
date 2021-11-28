import { lazy } from 'react';

import { SUBJECT_PATH } from './../constants/subject.paths';

const SUBJECT_SCREEN = {
  id: 'id_subject',
  pageTitle: 'Quản trị môn học',
  path: SUBJECT_PATH.LIST,
  component: lazy(() => import('./../screens/SubjectScreen')),
  isPrivateRoute: true,
};

export const SUBJECT_ROUTES = [SUBJECT_SCREEN];
