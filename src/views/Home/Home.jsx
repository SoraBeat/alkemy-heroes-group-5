import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.clear();
      navigate("/");
    }
  }, []);

  return (
    <div className="home-container">
      <NavBar />
    </div>
  );
};

export default Home;
