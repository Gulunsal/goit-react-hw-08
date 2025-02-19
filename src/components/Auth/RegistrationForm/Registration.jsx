import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../redux/auth/operations";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

export default function Registration() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required(),
    email: Yup.string().required(),
    password: Yup.string().required().min(3),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div>
                <Field
                  name="name"
                  value={values.name}
                  placeholder="name"
                  type="text"
                  onChange={handleChange}
                />
                 <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <Field
                  name="email"
                  value={values.email}
                  placeholder="email"
                  type="email"
                  onChange={handleChange}
                />
                 <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field
                  name="password"
                  value={values.password}
                  placeholder="password"
                  type="password"
                  onChange={handleChange}
                />
                 <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
