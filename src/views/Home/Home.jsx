import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

import AnimatedFrame from "../../components/AnimatedFrame/AnimatedFrame";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import HoneycombPanel from "../../components/HoneycombPanel/HoneycombPanel";

export const apiContext = createContext();

const Home = () => {
  const [apiCharacters, setApiCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        <NavBar/>
        <apiContext.Provider value={{ apiCharacters, setApiCharacters,isLoading,setIsLoading}}>
          <SearchBar />
          <HoneycombPanel />
        </apiContext.Provider>
      </div>
    </AnimatedFrame>
  );
};

export default Home;
