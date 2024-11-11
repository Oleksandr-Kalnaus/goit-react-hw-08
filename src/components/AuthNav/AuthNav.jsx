import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ModalWrapper from "./../ModalWrapper/ModalWrapper";
import css from "./AuthNav.module.css";

function AuthNav() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.authNav}>
      <NavLink
        to="#"
        onClick={() => openModal("login")}
        className={({ isActive }) => (isActive ? css.active : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="#"
        onClick={() => openModal("register")}
        className={({ isActive }) => (isActive ? css.active : "")}
      >
        Sign Up
      </NavLink>

      <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
        {modalType === "login" ? <LoginForm /> : <RegistrationForm />}
      </ModalWrapper>
    </div>
  );
}

export default AuthNav;
