import { lazy } from 'react';

import { ROLE_PATHS } from '../constants/role.paths';

const ROLE_SCREEN = {
  id: 'id_role',
  path: ROLE_PATHS.LIST,
  component: lazy(() => import('../screens/RoleScreen/RoleScreen')),
  pageTitle: 'Quản trị vai trò',
  isPrivateRoute: true,
};

const ROLE_ACTION_ADD_SCREEN = {
  id: 'id_role_action_add',
  path: ROLE_PATHS.ROLE_ACTION_ADD,
  component: lazy(() => import('../screens/RoleActionScreen/RoleActionScreen')),
  pageTitle: 'Quản trị vai trò',
  exact: true,
  isPrivateRoute: true,
};

const ROLE_ACTION_EDIT_SCREEN = {
  id: 'id_role_action_edit',
  path: ROLE_PATHS.ROLE_ACTION_EDIT,
  component: lazy(() => import('../screens/RoleActionScreen/RoleActionScreen')),
  pageTitle: 'Quản trị vai trò',
  isPrivateRoute: true,
};

export const ROLE_ROUTES = [
  ROLE_SCREEN,
  ROLE_ACTION_ADD_SCREEN,
  ROLE_ACTION_EDIT_SCREEN,
];
