import { NavLink } from 'react-router-dom';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
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

export default function AuthNav() {
  return (
    <div style={s.container}>
      <NavLink
        to="/register"
        style={({ isActive }) => ({
          color: isActive ? 'darkviolet' : 'black',
          textDecoration: 'none',
        })}
      >
        <button style={s.button}>Реєстрація</button>
      </NavLink>

      <NavLink
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? 'darkviolet' : 'black',
          textDecoration: 'none',
        })}
      >
        <button style={s.button}>Вхід</button>
      </NavLink>
    </div>
  );
}
