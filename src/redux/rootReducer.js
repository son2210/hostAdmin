import { combineReducers } from '@reduxjs/toolkit';

import { commonReducer } from './common.slice';
import useReducer from 'features/user/redux/user.slice';
import { authReducer } from 'features/auth/redux/auth.slice';
import productReducer from 'features/confirm/redux/product.slice';
import subjectReducer from 'features/subject/redux/subject.slice';
import uploadExcelReducer from 'features/uploadExcel/redux/uploadExcel.slice';
import majorsReducer from 'features/majors/redux/majors.slice';
import productTypeReducer from 'features/product-type/redux/product-type.slice';
import semesterReducer from 'features/semester/redux/semester.slice';
import roleReducer from 'features/role/redux/role.slice';
import permissionsReducer from 'features/permissions/redux/permissions.slice';
import campusesReducer from 'features/campuses/redux/campuses.slice';

const rootReducer = combineReducers({
  user: useReducer,
  auth: authReducer,
  product: productReducer,
  subject: subjectReducer,
  common: commonReducer,
  uploadExcel: uploadExcelReducer,
  majors: majorsReducer,
  productType: productTypeReducer,
  semester: semesterReducer,
  role: roleReducer,
  permission: permissionsReducer,
  campuses: campusesReducer,
});

export default rootReducer;
