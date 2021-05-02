import { RouteComponentProps } from "react-router-dom";

export function getDisplayName(WrappedComponent: React.FC<RouteComponentProps>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
