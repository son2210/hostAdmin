import api from '../../../api/api';

import { ROLE_ENDPOINTS } from '../constants/role.endpoints';

const getRole = () => {
  return api.get(ROLE_ENDPOINTS.GET_ROLES);
};

const getRoleDetail = (id) => {
  return api.get(ROLE_ENDPOINTS.GET_ROLE_DETAIL.replace(':id', id));
};

const postRole = (value) => {
  return api.post(ROLE_ENDPOINTS.POST_ROLE, value);
};

const removeRole = (id) => {
  return api.delete(ROLE_ENDPOINTS.DELETE_ROLE.replace(':id', id.toString()));
};

const putRole = (value) => {
  return api.put(
    ROLE_ENDPOINTS.PUT_ROLE.replace(':id', value.roles.id.toString()),
    value
  );
};

export const roleApi = {
  getRole,
  getRoleDetail,
  postRole,
  removeRole,
  putRole,
};
