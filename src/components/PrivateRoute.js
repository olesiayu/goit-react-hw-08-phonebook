import authSelectors from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace={true} />;
}
