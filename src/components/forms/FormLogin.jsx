import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import "./FormLogin.scss";

import FormInput from "./formFields/FormInput";
import FormLabel from "./formLabels/FormLabel";
import FormAlert from "./formsAlerts/FormAlert";
import FormButton from "./formButtons/FormButton";
import Title from "../titles/Title";

const FormLogin = () => {
  const navigate = useNavigate();

  useState(()=>{
    localStorage.clear()
  },[])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formData) => {
      const email = formData.email;
      const password = formData.password;
      axios.post("http://challenge-react.alkemy.org", {email,password})
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        })
        .catch((error) => {
          swal({
            title: "Oh no :C",
            text: "Invalid credentials, try again",
            icon: "error",
            button: "Aww yiss!",
          });
        });
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
      className="form-login p-4 rounded shadow-lg border"
    >
      <Title text="Login" />
      <div className="mt-2">
        <FormLabel htmlFor="email" text="Email" />
        <FormInput
          type="text"
          placeholder="Email here"
          name="email"
          formik={formik}
          danger={formik.errors.email}
          touched={formik.touched.email}
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
          danger={formik.errors.password}
          touched={formik.touched.password}
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
