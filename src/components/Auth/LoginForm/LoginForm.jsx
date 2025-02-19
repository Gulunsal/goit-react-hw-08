import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().matches().required("Email is Required"),
    password: Yup.string().min(7).max(25).required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div>
                <Field
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">LOGIN</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
