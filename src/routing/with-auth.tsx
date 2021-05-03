import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { getDisplayName } from 'shared/utils/hoc';

interface Props {
  authenticated: boolean;
}

export default function withAuth(WrappedComponent: React.FC<RouteComponentProps>) {
  function WithAuth({ authenticated, ...rest }: Props) {
    return (
      <Route
        {...rest}
        render={props => {
          const { pathname, search, hash } = props.location;
          const searchString = search
            ? `${search}&redirectUrl=${pathname}${hash}`
            : `?redirectUrl=${pathname}${hash}`;

          return authenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/sign-in',
                search: searchString,
              }}
            />
          );
        }}
      />
    );
  }

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
}
