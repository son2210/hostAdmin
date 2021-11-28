import styled from 'styled-components';

export const BoxMain = styled.div`
    position: relative;
  .table-confirm .fix-th {
    min-width: 8rem;
  }
  .fix-td {
    text-align: center;
  }
  .messengers{
    padding: 0.6rem 0px 1.5rem 0rem ;
    font-size: 1.8rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const GroupAction = styled.div`
  text-align: right;
  position: relative;
  z-index: 200;
  .show-action {
    cursor: pointer;
    font-size: 2rem;
  }
`;

export const ListAction = styled.div`
  position: absolute;
  top: -2rem;
  right: 3rem;
  background-color: var(--white-color);
  box-shadow: 0 0 1rem var(--eee-color);
  border-radius: 5px;
  z-index: 0;
  overflow: hidden;
  .item-action {
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1rem;
    &:hover {
      background-color: var(--eee-color);
    }
  }
  .icon-action {
    padding-right: 7px;
  }
  & a{
    color: black;
    display: block;
  }
  .item-action.disabled {
    background-color: hsl(0deg 0% 93%);
    color: hsl(0deg 0% 40% / 40%);
    pointer-events: none;
  }
  & button {
    width: 100%;
    border: none;
    background-color: var(--white-color);
  }
  & button:disabled {
    background-color: #efecec;
  }
  & button:disabled:hover {
    width: 100%;
    cursor: not-allowed;
    box-shadow: 0 0 1rem var(--eee-color);
  }

  .loader {
    border: 2px solid var(--eee-color);
    border-top: 2px solid var(--blue-color);
    border-right: 2px solid var(--blue-color);
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-right: 7px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const GroupPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;
