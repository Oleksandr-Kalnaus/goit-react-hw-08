import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Field name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in format xxx-xx-xx")
    .required("Field number is required"),
});

const ContactForm = ({ onEdit, contact, onClose }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = contact || { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    if (onEdit) {
      dispatch(editContact({ ...values, id: contact.id }));
    } else {
      dispatch(addContact(values));
    }
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.name}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Name Surname"
        />
        <ErrorMessage className={css.error} name="name" component="div" />

        <label htmlFor={numberFieldId} className={css.name}>
          Number
        </label>
        <Field
          className={css.field}
          type="phone"
          name="number"
          id={numberFieldId}
          placeholder="XXX-XX-XX"
        />
        <ErrorMessage className={css.error} name="number" component="div" />

        <button type="submit" className={css.addBtn}>
          <IoPersonAddSharp className={css.icon} />
          {onEdit ? "Edit contact" : "Add contact"}
        </button>
        <button type="button" onClick={onClose} className={css.cancelBtn}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
