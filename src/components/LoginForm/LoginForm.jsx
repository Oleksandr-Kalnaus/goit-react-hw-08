import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password cannot exceed 50 characters")
    .required("Password is required"),
});

const LoginForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(login(values));
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Login successful!");
        onSuccess();
        actions.resetForm();
        navigate("/");
      } else {
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className={css.loginForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="email" className={css.label}>
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
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
                className={css.field}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={css.button}
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default LoginForm;
