import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      {isLoggedIn && (
        <>
          <span className={css.username}>Welcome, {user.name}</span>
          <button onClick={handleLogout} className={css.logoutButton}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default UserMenu;
