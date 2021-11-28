import { lazy } from 'react';

import { PERMISSIONS_PATH } from '../constants/permissions.paths';

const PERMISSIONS_SCREEN = {
  id: 'id_permissions',
  path: PERMISSIONS_PATH.LIST,
  component: lazy(() =>
    import('../screens/PermissionsScreen/PermissionsScreen')
  ),
  pageTitle: 'Quản trị quyền',
  isPrivateRoute: true,
};

export const PERMISSIONS_ROUTES = [PERMISSIONS_SCREEN];
