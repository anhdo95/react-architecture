import { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux'

import routes, { RouteConfig } from './routes';
import withAuth from './with-auth';

// import { selectIsAuthenticated } from '@/store/user'

function NestingSwitch() {
  // const isAuthenticated = useSelector(selectIsAuthenticated)
  const isAuthenticated = true;

  const renderRoute = useCallback(
    function (route: RouteConfig, prefix?: string): JSX.Element {
      const path = prefix ? prefix + route.path : route.path;

      const routeProps = {
        exact: route.exact,
        key: path,
        path,
      };

      if (route.children?.length) {
        return (
          <Switch>{route.children.map(r => renderRoute(r, route.path))}</Switch>
        );
      }

      if (route.private) {
        const Component = withAuth(route.component);
        return <Component {...routeProps} authenticated={isAuthenticated} />;
      }

      return <Route {...routeProps} component={route.component} />;
    },
    [isAuthenticated]
  );

  const renderRoutes = useCallback(
    function () {
      return routes.map(r => renderRoute(r));
    },
    [renderRoute]
  );

  return <Switch>{renderRoutes()}</Switch>;
}

export default NestingSwitch;
