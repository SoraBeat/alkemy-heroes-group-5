import React from "react";
import "./Login.scss"

import FormLogin from "../../components/forms/FormLogin";
import BigLogo from "../../components/logos/BigLogo";

const Login = () => {
  return (
    <div className="background-login justify-content-center align-items-center">
      <BigLogo />
      <FormLogin />
    </div>
  );
};

export default Login;
