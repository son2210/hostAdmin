import styled from 'styled-components';

import BgLogin from 'assets/images/bg-login.jpg';

export const PageSingIn = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const PageSingInLeft = styled.div`
  width: 65%;
  height: 100%;
  background-image: url(${BgLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const PageSingInRight = styled.div`
  width: 35%;
  position: relative;
`;
export const FormLogin = styled.div`
  position: absolute;
  text-align: center;
  width: 70%;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  .logo-from {
    width: 18rem;
  }
  .des-from {
    font-size: 1.4rem;
    font-family: Arial, sans-serif;
    color: var(--txt-color);
    margin-top: 1rem;
  }
  .icon-form {
    font-size: 2rem;
    padding-right: 1rem;
  }
  .button-form {
    display: flex;
    margin-top: 1.5rem;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--pink-color);
    border-radius: 5px;
    padding: 1rem 0;
    color: var(--white-color);
    width: 100%;
    transition: linear 0.2s;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .button-form:hover {
    opacity: 0.9;
  }
`;
export const BoxSelect = styled.div`
  padding-top: 2rem;
  text-align: left;
  .select-option {
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 2.5px 0;
    background-color: var(--eee-color);
  }
  .css-1s2u09g-control {
    background-color: var(--eee-color);
    border: none;
    height: 100%;
  }
  .css-1pahdxg-control {
    background-color: var(--eee-color);
    border: none;
    box-shadow: none;
  }
  .css-qc6sy-singleValue {
    font-size: 1.3rem;
  }
  .css-yk16xz-control {
    background-color: var(--eee-color);
    border: none;
  }
  .error {
    padding-top: 1rem;
    font-size: 1.2rem;
    color: red;
  }
`;
