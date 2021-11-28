import api from '../../../api/api';

import { PERMISSIONS_ENDPOINT } from '../constants/permissions.endpoints';

const getPermissions = () => {
  return api.get(PERMISSIONS_ENDPOINT.GET_PERMISSIONS);
};

const postPermissions = (value) => {
  return api.post(PERMISSIONS_ENDPOINT.POST_PERMISSIONS, value);
};

const removePermissions = (id) => {
  return api.delete(
    PERMISSIONS_ENDPOINT.DELETE_PERMISSIONS.replace(':id', id.toString())
  );
};

const putPermissions = (value) => {
  return api.put(
    PERMISSIONS_ENDPOINT.PUT_PERMISSIONS.replace(
      ':id',
      value.permissions.id.toString()
    ),
    value
  );
};

export const permissionsApi = {
  getPermissions,
  postPermissions,
  removePermissions,
  putPermissions,
};
