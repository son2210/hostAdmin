import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';

import { WrapSidebar, ListMenu, ItemLink } from './Sidebar.styles';
import LogoFpt from 'assets/images/logo.png';
import { DASHBOARD_PATH } from 'features/dashboard/constants/dashboard.paths';
import { getPermissions } from 'features/auth/redux/auth.slice';

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const routesPermission = JSON.parse(
      JSON.parse(localStorage.getItem('persist:auth'))?.permission
    );
    dispatch(getPermissions(routesPermission));
  }, [location.pathname, dispatch]);

  const { listPermission } = useSelector((state) => ({
    listPermission: state.auth.permission,
  }));

  return (
    <WrapSidebar>
      <Link to="/">
        <img src={LogoFpt} alt="" className="img-logo" />
      </Link>

      <div className="group-sidebar scroll-delayed">
        <div className="content-sidebar ">
          <div>
            <ItemLink
              exact
              to={DASHBOARD_PATH.LIST}
              className="link-menu"
              activeClassName="active"
            >
              <RiDashboardLine className="icon-menu" />
              Quản trị Dashboard
            </ItemLink>
          </div>
          {listPermission &&
            listPermission.map((sidebar, index) => {
              if (sidebar?.items.length > 0) {
                let titleGroup = '';
                switch (sidebar.title) {
                  case 1:
                    titleGroup = 'Quản trị';
                    break;
                  case 2:
                    titleGroup = 'Phân quyền';
                    break;
                  case 3:
                    titleGroup = 'Nhập điểm';
                    break;
                  case 4:
                    titleGroup = 'Cài đặt';
                    break;
                  default:
                    break;
                }
                return (
                  <ListMenu key={index}>
                    {sidebar?.title && (
                      <div className="title-sidebar">
                        <span className="title-cate">{titleGroup}</span>
                      </div>
                    )}
                    {sidebar?.items.map((sidebarItem, index) => {
                      return (
                        sidebarItem?.items.length !== 0 && (
                          <li className="item-menu" key={index}>
                            <ItemLink
                              exact
                              to={
                                sidebarItem?.items.length === 1 &&
                                sidebarItem?.items[0]?.url
                              }
                              className="link-menu"
                              activeClassName="active"
                            >
                              {/* {sidebarItem?.items[0]?.icon && (
                                <span className="icon-menu">{icons}</span>
                              )} */}
                              {sidebarItem?.items[0]?.title}
                            </ItemLink>
                          </li>
                        )
                      );
                    })}
                  </ListMenu>
                );
              }
              return null;
            })}
        </div>
      </div>
    </WrapSidebar>
  );
};

export default memo(Sidebar);
