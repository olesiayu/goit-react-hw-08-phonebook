import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Реєстрація
      </NavLink>

      <NavLink
        to="/login"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Увійти
      </NavLink>
    </div>
  );
}
