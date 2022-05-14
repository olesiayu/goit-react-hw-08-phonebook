import authOperations from 'auth/auth-operations';
import authSelectors from 'auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
// import defaultAvatar from 'default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div>
      {/* <img src={avatar} alt="avatar" widht="32" /> */}
      <span>Ласкаво просимо, {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вихід
      </button>
    </div>
  );
}
