import { useEffect } from 'react';
import qs from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useRedirectAfterLogin() {
  const history = useHistory();
  const location = useLocation();
  const { redirect } = qs.parse(location.search);
  const { accessToken } = useSelector((state) => ({
    accessToken: state.auth?.accessToken,
  }));

  useEffect(() => {
    if (accessToken !== null) {
      history.push(redirect ?? '/');
    }
  }, [redirect, history, accessToken]);
  return null;
}

export default useRedirectAfterLogin;
