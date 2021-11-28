import { lazy } from 'react';
import { AUTH_PATHS } from './../constants/auth.paths';
const AuthLayout = lazy(() => import('../layouts/AuthLayoutScreens'));
export const SIGN_IN_SCREEN = {
  id: 'id_sign_in',
  path: AUTH_PATHS.SIGN_IN,
  component: lazy(() => import('./../screens/SignIn/SignInScreen')),
  layout: AuthLayout,
};

export const AUTH_ROUTES = [SIGN_IN_SCREEN];
