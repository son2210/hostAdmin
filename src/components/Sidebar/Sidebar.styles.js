import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapSidebar = styled.div`
  width: 28rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0px 0px 28px 0px rgb(82 63 105 / 8%);
  border: 1px solid rgb(82 63 105 / 8%);
  padding: 2rem 5px 2rem 2rem;
  height: 100vh;
  .img-logo {
    width: 14rem;
  }
  .group-sidebar {
    position: relative;
    height: 100%;
    padding: 0 1rem 6rem 0;
    margin-top: 2.5rem;
    visibility: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--eee-color);
      border-radius: 10px;
    }
  }
  .content-sidebar {
    margin-bottom: 2rem;
  }
  .content-sidebar,
  .group-sidebar:hover,
  .group-sidebar:focus {
    visibility: visible;
  }
  .scroll-delayed:hover {
    transition: visibility 0.2s;
  }
`;
export const ListMenu = styled.ul`
  margin-top: 1.5rem;
  .item-menu + .item-menu {
    margin-top: 1rem;
  }
  .title-sidebar {
    font-size: 1.4rem;
    margin: 1.5rem 0;
    position: relative;
    color: var(--txt-sidebar);
  }
  .title-sidebar:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    z-index: -1;
    width: 100%;
    height: 0.5px;
    background-color: var(--txt-sidebar);
  }
  .title-cate {
    background-color: var(--white-color);
    padding-right: 1rem;
  }
`;
export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--txt-sidebar);
  padding: 1.4rem;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  transition: linear 0.3s;
  &:hover {
    color: var(--blue-color);
    background-color: var(--blue2-color);
  }
  &.active {
    color: var(--blue-color);
    background-color: var(--blue2-color);
  }
  & .icon-menu {
    margin-right: 1.5rem;
  }
`;
