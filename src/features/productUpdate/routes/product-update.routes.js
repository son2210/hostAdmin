import { lazy } from "react";
const   PRODUCT_UPDATE_SCREEN = {
    id: "product-update",
    path :"/product/update/:id",
    component:  lazy(()=>import('./../screens/ProductUpdateScreens.jsx')),
    pageTitle : "Cập nhật sản phẩm ",
    // isPrivateRoute: true,
}
export const PRODUCT_UPDATE_ROUTES = [PRODUCT_UPDATE_SCREEN]