import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.appBarBox}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </div>
  );
}
export default AppBar;
