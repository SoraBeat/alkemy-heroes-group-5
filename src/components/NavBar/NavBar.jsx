import React from "react";
import { useNavigate } from "react-router-dom";
import BigLogo from "../logos/BigLogo";
import Button from "../Button/Button";

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="navbar navbar-expand-lg px-3 pt-4">
      <div className="container-fluid">
        <BigLogo className="navbar-brand" height="auto" width="10rem" />
        <Button width="5rem" height="3rem" doSomething={logout} text="Logout" />
      </div>
    </div>
  );
};

export default NavBar;
