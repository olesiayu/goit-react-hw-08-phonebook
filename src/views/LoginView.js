import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'auth/auth-operations';

const s = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  input: {
    display: 'block',
    alignItems: 'center',
    height: 30,
    width: 200,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    border: 'none',
  },
  title: {
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    fontWeight: 'bold',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    height: 35,
    width: 130,
    backgroundColor: 'rgb(216, 174, 245)',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2 style={s.title}>Авторизуйтеся, будь ласка!</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={s.label}>
          Пошта
          <input
            style={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label style={s.label}>
          Пароль
          <input
            style={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength={7}
            required
          />
        </label>
        <button type="submit" style={s.button}>
          Увійти
        </button>
      </form>
    </div>
  );
}
