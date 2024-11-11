import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(30, "Name cannot exceed 30 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password cannot exceed 50 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(register(values)).unwrap();
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Registration successful!");
        actions.resetForm();
        navigate("/");
      } else {
        toast.error("Registration failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className={css.regForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.label}>
                Name:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className={css.field}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="email" className={css.label}>
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="password" className={css.label}>
                Password:
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Create a password"
                className={css.field}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error"
                className={css.error}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={css.button}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default RegistrationForm;
