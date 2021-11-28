import { lazy } from 'react';

import { USER_PATHS } from './../constants/user.paths';

const USER_LIST = {
  id: 'id_user_list',
  path: USER_PATHS.LIST,
  component: lazy(() => import('./../screens/UserScreen/UserScreen')),
  pageTitle: 'Quản trị User',
  exact: true,
  isPrivateRoute: true,
};

const USER_PROFILE = {
  id: 'id_user_list',
  path: USER_PATHS.USER_PROFILE,
  component: lazy(() => import('./../screens/UserProfile/UserProfile')),
  pageTitle: 'Quản trị User',
  isPrivateRoute: true,
};

export const USER_LIST_ROUTES = [USER_LIST, USER_PROFILE];
