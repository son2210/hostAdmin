import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultLayout from './../layouts/DefaultLayout/DefaultLayout';
import { LIST_ROUTES } from './routes.config';
import Loading from './../components/Loading/Loading';
import LoginRedirect from 'features/auth/helpers/LoginRedirect';
import { useSelector } from 'react-redux';

const WrapRoute = ({
  component: Component,
  path,
  layout,
  exact,
  isPrivateRoute,
}) => {
  const RouteLayout = layout || DefaultLayout;
  const isExact = exact || false;
  const isSignedIn = useSelector((state) => !!state.auth.accessToken);

  if (isPrivateRoute && !isSignedIn) {
    return <LoginRedirect />;
  }
  return (
    <Route
      exact={isExact}
      path={path}
      render={(props) => {
        const Content = () => {
          return (
            <RouteLayout>
              <Component {...props} />
            </RouteLayout>
          );
        };
        return <Content />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {LIST_ROUTES.map((route) => (
          <WrapRoute key={route.id} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
