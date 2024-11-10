import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { BsPersonFillGear, BsPersonFill, BsPersonFillX } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";

const Contact = ({ id, name, number, onDelete, onEdit }) => {
  return (
    <div className={css.contactBox}>
      <div className={css.contact}>
        <p className={css.contactText}>
          <BsPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.contactText}>
          <MdLocalPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.btnBox}>
        <button className={css.editBtn} onClick={() => onEdit(id)}>
          <BsPersonFillGear className={css.icon} />
          Edit
        </button>
        <button className={css.delBtn} onClick={onDelete}>
          <BsPersonFillX className={css.icon} />
          Delete
        </button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Contact;
