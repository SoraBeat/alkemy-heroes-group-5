import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

import AnimatedFrame from "../../components/AnimatedFrame/AnimatedFrame";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

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
    <AnimatedFrame>
      <div className="home-container">
        <NavBar />
        <SearchBar />
      </div>
    </AnimatedFrame>
  );
};

export default Home;
