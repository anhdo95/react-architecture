import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export function getDisplayName(WrappedComponent: React.FC<RouteComponentProps>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
