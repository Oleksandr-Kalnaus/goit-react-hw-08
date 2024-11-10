import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Field name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in format xxx-xx-xx")
    .required("Field number is required"),
});

const ContactForm = ({ onEdit, contact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    if (onEdit) {
      dispatch(editContact({ ...newContact, id: contact.id }));
    } else {
      dispatch(addContact(newContact));
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={nameFieldId} className={styles.name}>
          Name
        </label>
        <Field
          className={styles.field}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Name Surname"
        />
        <ErrorMessage className={styles.error} name="name" component="div" />
        <label htmlFor={numberFieldId} className={styles.name}>
          Number
        </label>
        <Field
          className={styles.field}
          type="phone"
          name="number"
          id={numberFieldId}
          placeholder="XXX-XX-XX"
        />
        <ErrorMessage className={styles.error} name="number" component="div" />
        <button type="submit" className={styles.addBtn}>
          <IoPersonAddSharp className={styles.icon} />
          {onEdit ? "Edit contact" : "Add contact"}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
