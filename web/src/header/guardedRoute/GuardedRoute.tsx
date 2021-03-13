import { Redirect, Route } from 'react-router';
import { GuardedRouteProps } from './GuardedRouteProps';

export const GuardedRoute = ({ component: Component }: GuardedRouteProps): JSX.Element => (
  <Route
    render={() => {
      return localStorage.getItem('token') ? <Component /> : <Redirect to="/" />;
    }}
  />
);
