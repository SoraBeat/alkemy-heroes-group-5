import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="email@email.com"
            name="email"
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <h1>{formik.errors.email}</h1>
        )}
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="********"
            name="password"
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <h1>{formik.errors.password}</h1>
        )}
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;
