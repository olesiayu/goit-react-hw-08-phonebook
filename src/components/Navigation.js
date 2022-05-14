import authSelectors from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const s = {
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
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
        <button style={s.button}>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              // marginRight: 10,
              color: isActive ? 'darkviolet' : 'black',
              textDecoration: 'none',
            })}
          >
            Контакти
          </NavLink>
        </button>
      )}
    </nav>
  );
};

export default Navigation;
