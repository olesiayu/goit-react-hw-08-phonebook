import authOperations from 'auth/auth-operations';
import authSelectors from 'auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    fontWeight: 700,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    height: 25,
    backgroundColor: 'rgb(205, 247, 222)',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={s.container}>
      <img src={avatar} alt="avatar" width="32" style={s.avatar} />
      <span style={s.name}>Ласкаво просимо, {name}!</span>
      <button
        type="button"
        style={s.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вихід
      </button>
    </div>
  );
}
