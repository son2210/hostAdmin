import api from 'api/api';

import { SUBJECT_PATH, SORT_PATH } from './../constants/subject.paths';

const getListSubject = () => {
  return api.get(SUBJECT_PATH.LIST);
};
const postSubject = (data) => {
  return api.post(SUBJECT_PATH.POST, data);
};
const removeSubject = (id) => {
  return api.delete(SUBJECT_PATH.REMOVE.replace(':id', id.toString()));
};
const putSubject = (data) => {
  return api.put(SUBJECT_PATH.UPDATE.replace(':id', data.id.toString()), data);
};

export const subjectApi = {
  getListSubject,
  postSubject,
  removeSubject,
  putSubject,
};
const sortMajors = (id) => {
  return api.get(SORT_PATH.LIST.replace(':id', id.toString()));
};
export const sortMajor = {
  sortMajors,
};
