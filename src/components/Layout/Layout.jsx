import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

function Layout() {
  return (
    <div className={css.layoutContainer}>
      <AppBar />
      <main className={css.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
