import authSelectors from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoulRedirect = isLoggedIn && restricted;
  return shoulRedirect ? <Navigate to="/contacts" replace={true} /> : children;
}
