import React, { memo, useState, useMemo } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GrTopCorner } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { compile } from 'path-to-regexp';

import {
  WrapNavbar,
  NavbarLeft,
  NavbarRight,
  NavbarSearch,
  NavbarAction,
  NavNotification,
  NavControl,
  ListAction,
  GroupNotification,
  ListNotification,
} from './Navbar.styles';
import { LIST_ROUTES } from 'routes/routes.config';
import { postLogout } from 'features/auth/redux/auth.slice';

const FAKE_NOTIFICATION = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556__480.jpg',
    title:
      'ĐỐI TƯỢNG: Sinh viên IT/ NonIT còn nông kiến thức về Frontend và muốn phát triển về Reactjs.',
    time: '10/08/2021',
    status: true,
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2021/06/01/07/02/plants-6300778__480.jpg',
    title: 'Tháng này, Bên mình đang triển khai khóa đào tạo FE',
    time: '10/08/2021',
    status: false,
  },
];

const Navbar = () => {
  const [actionUser, setActionUser] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const {
    pageTitle: ReduxPageTitle,
    useLogin,
    accessToken,
  } = useSelector((state) => ({
    pageTitle: state.common.pageTitle,
    useLogin: state.auth.useLogin,
    accessToken: state.auth.accessToken,
  }));

  const pageTitle = useMemo(() => {
    return (
      ReduxPageTitle ||
      LIST_ROUTES.find((route) => {
        try {
          return compile(route.path)(params) === location.pathname;
        } catch {
          return false;
        }
      })?.pageTitle
    );
  }, [params, location.pathname, ReduxPageTitle]);

  const handleLogout = async () => {
    dispatch(postLogout());
  };

  return (
    <WrapNavbar>
      <NavbarLeft>
        <h1 className="title-admin">{pageTitle}</h1>
      </NavbarLeft>
      <NavbarRight>
        <NavbarSearch>
          <input type="text" className="main-search" placeholder="Search" />
          <span className="icon-search">
            <BiSearchAlt2 />
          </span>
        </NavbarSearch>

        <NavbarAction>
          <GroupNotification>
            <NavNotification onClick={() => setIsNotification(!isNotification)}>
              <span className="icon-notification">
                <IoMdNotificationsOutline />
              </span>
              <span className="total-notification">0</span>
            </NavNotification>

            <OutsideClickHandler
              onOutsideClick={() => setIsNotification(false)}
            >
              <ListNotification className={`${isNotification ? 'active' : ''}`}>
                <h3 className="notification-title">Thông báo</h3>
                {FAKE_NOTIFICATION.map((item) => (
                  <a href="!#" className="notification-item" key={item.id}>
                    <img src={item.img} alt="" className="notification-image" />
                    <div className="notification-content">
                      <h4 className="notification-label">{item.title}</h4>
                      <span className="notification-time">{item.time}</span>
                    </div>
                    <div
                      className={`notification-status ${
                        item.status ? 'active' : ''
                      }`}
                    ></div>
                  </a>
                ))}
              </ListNotification>
            </OutsideClickHandler>
          </GroupNotification>

          <NavControl>
            {useLogin && accessToken && (
              <div className="box-control">
                <img src={useLogin?.avatar} alt="" className="avatar-user" />
                {useLogin?.email}
                <div
                  className="icon-drop"
                  onClick={() => setActionUser(!actionUser)}
                >
                  <GrTopCorner />
                </div>
              </div>
            )}

            <OutsideClickHandler onOutsideClick={() => setActionUser(false)}>
              <ListAction className={`${actionUser ? 'active' : ''}`}>
                <li className="item-action">
                  <button className="link-action" onClick={handleLogout}>
                    <BiLogOut className="icon-action" />
                    Logout
                  </button>
                </li>
              </ListAction>
            </OutsideClickHandler>
          </NavControl>
        </NavbarAction>
      </NavbarRight>
    </WrapNavbar>
  );
};

export default memo(Navbar);
