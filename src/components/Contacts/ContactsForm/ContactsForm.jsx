import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function ContactsForm() {
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required("Name is Required"),
    number: Yup.number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? null : value
      )
      .nullable()
      .required("Number is required")
      .positive("Number can't be Negative value")
      .integer(),
  });

  const handleSubmit = (values, {resetForm}) => {
    dispatch(addContact(values))
    resetForm();
  }

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ values, handleChange }) => {
          return (
            <Form>
            <div>
              <Field
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                name="name"
              />
               <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                placeholder="number"
                value={values.number}
                onChange={handleChange}
                name="number"
              />
               <ErrorMessage name="number" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
          );
        }}
      </Formik>
    </div>
  );
}
