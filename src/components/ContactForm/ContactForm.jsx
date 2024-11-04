import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
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

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    event.preventDefault();
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
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
        <ErrorMessage className={styles.error} name="name" component="span" />
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
        <ErrorMessage className={styles.error} name="number" component="span" />
        <button type="submit" className={styles.addBtn}>
          <IoPersonAddSharp className={styles.icon} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
