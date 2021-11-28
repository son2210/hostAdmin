import api from 'api/api';

import { UPLOAD_EXCEL_ENDPOINTS } from './../constants/upload-excel.endpoints';

const postImportFile = (file) => {
  return api.post(UPLOAD_EXCEL_ENDPOINTS.UPLOAD_EXCEL, file);
};

const getSemesters = () => {
  return api.get(UPLOAD_EXCEL_ENDPOINTS.GET_SEMESTERS);
};
export const uploadExcelApi = {
  postImportFile,
  getSemesters,
};
