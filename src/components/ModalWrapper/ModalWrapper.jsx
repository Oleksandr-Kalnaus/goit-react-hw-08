import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1000",
        },
        content: {
          position: "relative",
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "none",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          zIndex: "1100",
        },
      }}
    >
      {children}
    </Modal>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalWrapper;
