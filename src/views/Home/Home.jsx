import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import HoneycombPanel from "../../components/HoneycombPanel/HoneycombPanel";
import GroupOfHeroes from "../../components/GroupOfHeroes/GroupOfHeroes";

export const apiContext = createContext();

const Home = () => {
  const [apiCharacters, setApiCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState([]);

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
        <apiContext.Provider
          value={{
            apiCharacters,
            setApiCharacters,
            isLoading,
            setIsLoading,
            selectedGroup,
            setSelectedGroup,
          }}
        >
          <SearchBar />
          <HoneycombPanel />
          <GroupOfHeroes />
        </apiContext.Provider>
      </div>
  );
};

export default Home;
