import authSelectors from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import homeIcon from './home-icon.png';

const s = {
  container: {
    display: 'flex',
    // alignItems: 'center',
  },
  button: {
    display: 'block',
    marginLeft: 20,
    // alignItems: 'baseline',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 15,
    height: 40,
    width: 150,
    backgroundColor: 'rgb(205, 247, 222)',
    border: 'none',
    cursor: 'pointer',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav style={s.container}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: 10,
          color: isActive ? 'darkviolet' : 'black',
          textDecoration: 'none',
        })}
      >
        <button style={s.button}>
          <img src={homeIcon} alt="homeIcon" width="32" />
        </button>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            // marginRight: 10,
            color: isActive ? 'darkviolet' : 'black',
            textDecoration: 'none',
          })}
        >
          <button style={s.button}>Контакти</button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
