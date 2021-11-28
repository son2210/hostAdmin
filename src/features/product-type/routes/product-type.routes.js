import { lazy } from 'react';

import { PRODUCT_TYPE_PATH } from './../constants/product-type.paths';

const PRODUCT_TYPE_SCREEN = {
  id: 'id_product_type',
  path: PRODUCT_TYPE_PATH.LIST,
  component: lazy(() =>
    import('./../screens/ProductTypeScreen/ProductTypeScreen')
  ),
  pageTitle: 'Quản trị danh mục',
  isPrivateRoute: true,
};

export const PRODUCT_TYPE_ROUTES = [PRODUCT_TYPE_SCREEN];
