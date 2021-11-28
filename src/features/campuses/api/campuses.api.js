import api from 'api/api';

import { CAMPUSES_ENDPOINTS } from './../constants/campuses.endpoints';

const getCampuses = () => {
  return api.get(CAMPUSES_ENDPOINTS.GET_CAMPUSES);
};

export const campusesApi = {
  getCampuses,
};
