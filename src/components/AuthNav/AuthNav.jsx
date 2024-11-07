import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.active : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.active : "")}
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default AuthNav;
