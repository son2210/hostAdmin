import React, { useEffect, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import Select from 'react-select';
import _get from 'lodash.get';

import {
  PageSingIn,
  PageSingInLeft,
  PageSingInRight,
  FormLogin,
  BoxSelect,
} from './SignInScreen.styles';
import LogoFpt from 'assets/images/logo.png';
import useRedirectAfterLogin from './../../hooks/useRedirectAfterLogin';
import { postAccessToken } from './../../redux/auth.slice';
import { getCampuses } from 'features/campuses/redux/campuses.slice';

const SignInScreen = () => {
  const dispatch = useDispatch();

  const [codeCampus, setCodeCampus] = useState(null);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');



  useEffect(() => {
    dispatch(getCampuses());
  }, [dispatch]);

  const { listCampuses } = useSelector((state) => ({
    listCampuses: state.campuses.listCampuses.map((campus) => ({
      label: campus.name,
      value: campus.code,
    })),
  }));
  useRedirectAfterLogin();
  const responseGoogle = async (response) => {
    const { accessToken } = response;
    if (accessToken) {
      const response = await dispatch(
        postAccessToken({
          codeCampus,
          accessToken,
        })
      );    if (!postAccessToken.fulfilled.match(response)) {
   
        setIsError(true);
        setMessage(_get(response, 'payload', ''));
       
      }
    }
  };

  const handleClickLogin = () => {
    if (!codeCampus) {
      setIsError(true);
      setMessage('Vui lòng chọn cơ sở');
    }
  };
  const handleCampuses = (data) => {
    setCodeCampus(data.value);
    setIsError(false);
  };

  return (
    <PageSingIn>
      <PageSingInLeft></PageSingInLeft>
      <PageSingInRight className="content">
        <FormLogin>
          <img src={LogoFpt} alt="" className="logo-from" />
          <p className="des-from">Cao đẳng thực hành Fpolytechnic</p>
          <BoxSelect className="campuses">
            <Select
              onChange={(e) => handleCampuses(e)}
              className="select-option input-search"
              placeholder="Lựa chọn cơ sở "
              options={listCampuses || []}
            />
            {isError && <p className="error">{message}</p>}
          </BoxSelect>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => {
              return (
                <button
                  className="button-form"
                  onClick={
                    !isError && codeCampus
                      ? renderProps.onClick
                      : handleClickLogin
                  }
                  disabled={renderProps.disabled}
                >
                  <span className="icon-form">
                    <AiOutlineGoogle />
                  </span>
                  Google
                </button>
              );
            }}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </FormLogin>
      </PageSingInRight>
    </PageSingIn>
  );
};

export default SignInScreen;
