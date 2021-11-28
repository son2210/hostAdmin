import api from 'api/api';

import { CATEGORY_SUBJECT_PATH } from './../constants/subject.paths';

const getListCategorySubject = () => {
  return api.get(CATEGORY_SUBJECT_PATH.LIST);
};
const postCategorySubjects = (data) => {
  return api.post(CATEGORY_SUBJECT_PATH.POST, data);
};
const removeCategorySubject = (id) => {
  return api.delete(CATEGORY_SUBJECT_PATH.REMOVE.replace(':id', id.toString()));
};
const putCategorySubject = (data) => {
  return api.put(
    CATEGORY_SUBJECT_PATH.UPDATE.replace(':id', data.id.toString()),
    data
  );
};

export const subjectApi = {
  getListCategorySubject,
  postCategorySubjects,
  removeCategorySubject,
  putCategorySubject,
};
