import { useEffect, useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";

function RegistrationPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
      <h2>Register</h2>
      <RegistrationForm />
    </ModalWrapper>
  );
}

export default RegistrationPage;
