import authSelectors from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {/* <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: 10,
          color: isActive ? 'red' : 'black',
        })}
      >
        Домашня
      </NavLink> */}

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            marginRight: 10,
            color: isActive ? 'red' : 'black',
          })}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
