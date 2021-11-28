import { lazy } from 'react';

import { UPLOAD_EXCEL_PATH } from './../constants/upload-excel.paths';

const UPLOAD_EXCEL_SCREEN = {
  id: 'id_upload_excel',
  path: UPLOAD_EXCEL_PATH.UPLOAD,
  component: lazy(() => import('./../screens/UploadExcelScreen')),
  pageTitle: 'Nhập điểm',
  isPrivateRoute: true,
};

export const UPLOAD_EXCEL_ROUTES = [UPLOAD_EXCEL_SCREEN];
