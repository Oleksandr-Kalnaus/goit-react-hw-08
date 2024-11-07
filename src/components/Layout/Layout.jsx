import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default Layout;
