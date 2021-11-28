import api from 'api/api';

import { SEMESTER_ENDPOINT } from '../constants/semester.endpoints';

const getSemester = () => {
  return api.get(SEMESTER_ENDPOINT.GET_SEMESTERS);
};

const postSemester = (value) => {
  return api.post(SEMESTER_ENDPOINT.POST_SEMESTERS, value);
};

const removeSemester = (id) => {
  return api.delete(
    SEMESTER_ENDPOINT.DELETE_SEMESTERS.replace(':id', id.toString())
  );
};

const putSemester = (value) => {
  return api.put(
    SEMESTER_ENDPOINT.PUT_SEMESTERS.replace(':id', value.id.toString()),
    value
  );
};

export const semesterApi = {
  getSemester,
  postSemester,
  removeSemester,
  putSemester,
};
