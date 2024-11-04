import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { IoPersonSharp, IoPersonRemoveSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contactBox}>
      <div className={styles.contact}>
        <p className={styles.contactText}>
          <IoPersonSharp className={styles.icon} />
          {name}
        </p>
        <p className={styles.contactText}>
          <MdLocalPhone className={styles.icon} />
          {number}
        </p>
      </div>
      <button className={styles.delBtn} onClick={onDelete}>
        <IoPersonRemoveSharp className={styles.icon} />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
