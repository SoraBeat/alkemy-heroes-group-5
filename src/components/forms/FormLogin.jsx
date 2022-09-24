import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./FormLogin.scss"

import FormInput from "./formFields/FormInput";
import FormLabel from "./formLabels/FormLabel";
import FormAlert from "./formsAlerts/FormAlert";
import FormButton from "./formButtons/FormButton";
import Title from "../titles/Title";

const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-login position-absolute top-50 start-50 translate-middle p-4 rounded shadow-lg border"
    >
      <Title text="Login" />
      <div className="mt-2">
        <FormLabel htmlFor="email" text="Email" />
        <FormInput
          type="text"
          placeholder="Email here"
          name="email"
          formik={formik}
        />
        {formik.errors.email && formik.touched.email && (
          <FormAlert text={formik.errors.email} />
        )}
      </div>
      <div className="mt-2">
        <FormLabel htmlFor="password" text="Password" />
        <FormInput
          type="password"
          placeholder="Password here"
          name="password"
          formik={formik}
        />
        {formik.errors.password && formik.touched.password && (
          <FormAlert text={formik.errors.password} />
        )}
      </div>
      <FormButton text="Login" />
    </form>
  );
};
export default FormLogin;
