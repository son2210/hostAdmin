import { lazy } from 'react';

import { FEEDBACK_PATH } from './../constants/feedback.paths';

const FEEDBACK_SCREEN = {
  id: 'id_feedback',
  path: FEEDBACK_PATH.LIST,
  component: lazy(() => import('./../screens/FeedbackScreen/FeedbackScreen')),
  pageTitle: 'Quản trị phản hồi',
  isPrivateRoute: true,
};

export const FEEDBACK_ROUTES = [FEEDBACK_SCREEN];
