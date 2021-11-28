import styled from 'styled-components';
export const GroupAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  width: 100%;
  float: right;
`;
export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 2rem;
  & > div:nth-child(3) {
    grid-column: 1/3;
  }
  & label {
    font-size: 15px;
    color: gray;
  }
  & .from-group {
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .from-group + .from-group {
    margin-top: 1.5rem;
  }
  & .from-group label {
    margin-right: 2rem;
    line-height: 3rem;
    font-size: 15px;
    color: gray;
  }
  & .from-group > input {
    width: 25rem;
    border-radius: 5px;
    font-size: 14px;
    padding-left: 1rem;
    outline: none;
    border: 1px solid #c1bcbc;
    height: 3.8rem;
    font-weight: 200;
    :focus {
      border: 2px solid #165bf3;
    }
  }
  & .from-group .select {
    position: relative;
    overflow: visible;
    width: 25.2rem;
    font-size: 14px;
    position: relative;
  }
  & .from-group .box-select .inputE {
    width: 100%;
    padding: 0.7rem 1rem;
    border: 1px solid #c1bcbc;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 14px;
    font-weight: 200;
    background-color: var(--bg-input);
    margin-bottom: 1rem;
  }
  & .from-group .box-select .remove {
    padding: 4px 2px;
    border: none;
    background: none;
    color: gray;
    font-size: 2rem;
    position: absolute;
    right: 6px;
    top: 45%;
    transform: translateY(-50%);
  }
  & .from-group .box-select .add {
    width: 100%;
    border-radius: 7px;
    border: 1px dashed gray;
    padding: 0.7rem;
    margin: 5px 0px;
  }
  .css-26l3qy-menu {
    overflow: visible;
  }
  & .list {
    margin-left: 13rem;
  }
  & .list ul {
    font-size: 1.4rem;
  }
  & .list ul li {
    padding: 3px 0px;
  }
  & .list ul li span {
    margin-left: 15px;
    color: var(--red-color);
    font-size: 1.7rem;
    line-height: 1.4rem;
  }
  & .image label {
    font-size: 1.5rem;
    color: gray;
  }
`;
export const GroupImage = styled.div`
  width: 100%;
  border: 2px dashed #7d787878;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 10px;
  & label {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0px;
  }
  & .icon {
    font-size: 25px;
    display: block;
  }
  & span {
    font-weight: 400;
    font-size: 11px;
  }
  & span.error {
    color: red;
  }
`;
export const ListImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 1fr 1fr 1fr;
  box-sizing: border-box;
  width: 100%;
  grid-gap: 1rem;
  padding-top: 1rem;
`;
export const ImageItem = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px dotted black;
  height: 105px;
  overflow: hidden;
  padding: 2px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  & img {
    width: 100%;
    border-radius: 5px;
    image-rendering: pixelated;
    image-resolution: center;
    height: 100%;
  }
  & .delete {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 1px;
    font-size: 27px;
    color: var(--red-color);
    opacity: 0;
    transition: ease-in 0.2s;
    visibility: hidden;
  }
  &:hover .delete {
    opacity: 1;
    visibility: visible;
  }
`;
