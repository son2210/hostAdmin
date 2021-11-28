import api from 'api/api';

import { MAJORS_ENDPOINTS } from '../constants/majors.endpoints';

const getMajors = () => {
  return api.get(MAJORS_ENDPOINTS.GET_MAJORS);
};

const postMajors = (majors) => {
  return api.post(MAJORS_ENDPOINTS.POST_MAJORS, majors);
};

const removeMajors = (id) => {
  return api.delete(
    MAJORS_ENDPOINTS.DELETE_MAJORS.replace(':id', id.toString())
  );
};

const putMajors = (majors) => {
  return api.put(
    MAJORS_ENDPOINTS.PUT_MAJORS.replace(':id', majors.id.toString()),
    majors
  );
};

export const majorsApi = {
  getMajors,
  postMajors,
  removeMajors,
  putMajors,
};
