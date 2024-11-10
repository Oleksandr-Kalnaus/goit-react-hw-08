import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";

const LoginPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
      <h2>Login</h2>
      <LoginForm />
    </ModalWrapper>
  );
};

export default LoginPage;
