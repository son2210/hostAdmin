import { lazy } from 'react';

import { CONFIRM_PATH } from '../constants/confirm.paths';
const ConfirmScreen = lazy(() =>
  import('../screens/ConfirmScreens/ConfirmScreen')
);

const CONFIRM_SCREEN = {
  id: 'id_confirm',
  path: `${CONFIRM_PATH.LIST}/:path?`,
  component: ConfirmScreen,
  pageTitle: 'Quản trị sản phẩm',
  isPrivateRoute: true,
};

export const CONFIRM_ROUTES = [CONFIRM_SCREEN];
