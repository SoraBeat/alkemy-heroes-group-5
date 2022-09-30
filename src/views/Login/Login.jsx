import React, { useState, useEffect } from "react";
import AnimatedFrame from "../../components/AnimatedFrame/AnimatedFrame";
import "./Login.scss";

import FormLogin from "../../components/forms/FormLogin";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <AnimatedFrame>
          <div className="background-login justify-content-center align-items-center">
            <FormLogin />
          </div>
        </AnimatedFrame>
      )}
    </>
  );
};

export default Login;
