import { lazy } from 'react';

import { DASHBOARD_PATH } from './../constants/dashboard.paths';
const DashboardScreen = lazy(() =>
  import('./../screens/DashboardScreens/DashboardScreen')
);

export const DASHBOARD_SCREEN = {
  id: 'id_dashboard',
  path: DASHBOARD_PATH.LIST,
  exact: true,
  component: DashboardScreen,
  pageTitle: 'Dashboard',
  isPrivateRoute: true,
};

export const DASHBOARD_ROUTES = [DASHBOARD_SCREEN];
