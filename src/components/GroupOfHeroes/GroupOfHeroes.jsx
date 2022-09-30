import React, { useContext, useState, useEffect } from "react";
import "./GroupOfHeroes.scss";

import { FaCompressArrowsAlt } from "react-icons/fa";
import { apiContext } from "../../views/Home/Home";
import IndividualHero from "./IndividualHero/IndividualHero";
import Button from "../Button/Button";

const GroupOfHeroes = () => {
  const [showStats, setShowStats] = useState(false);
  const [acumulative, setAcumulative] = useState([]);
  const [maxStat,setMaxStat]=useState("none");
  const { selectedGroup, setSelectedGroup } = useContext(apiContext);


  useEffect(() => {
    let acumulativeStats = [[0, 0, 0, 0, 0, 0],["intelligence","strength","speed","durability","power","combat"]];
    let statMax=0;
    let nameStatMax="";
    selectedGroup.map((hero) => {
      for (const powestat in hero.powerstats) {
        switch (powestat) {
          case "intelligence":
            acumulativeStats[0][0] += parseInt(hero.powerstats[powestat])||0;
            break;
          case "strength":
            acumulativeStats[0][1] += parseInt(hero.powerstats[powestat])||0;
            break;
          case "speed":
            acumulativeStats[0][2] += parseInt(hero.powerstats[powestat])||0;
            break;
          case "durability":
            acumulativeStats[0][3] += parseInt(hero.powerstats[powestat])||0;
            break;
          case "power":
            acumulativeStats[0][4] += parseInt(hero.powerstats[powestat])||0;
            break;
          case "combat":
            acumulativeStats[0][5] += parseInt(hero.powerstats[powestat])||0;
            break;
        }
      }
    });
    acumulativeStats[0].map((stat,index)=>{
      if(stat>statMax){
        statMax=stat;
        nameStatMax=acumulativeStats[1][index];
      }
    })
    setMaxStat(nameStatMax)
    setAcumulative(acumulativeStats)
  }, [selectedGroup]);

  const handleDelete = (id) => {
    const filtered = [];
    selectedGroup.map((hero) => {
      if (hero.id !== id) filtered.push(hero);
    });
    setSelectedGroup(filtered);
  };

  const handleStats = () => {
    setShowStats(!showStats);
  };
  return (
    <div>
      {showStats && (
        <div className="container-stats">
          <div className="container-cross">
            <button onClick={handleStats}>
              <FaCompressArrowsAlt color="white" />
            </button>
          </div>
          <div className="container-data-main">
            <h1 className="stats-title">Group Stats</h1>
            <div className="container-data">
              <p>
                <b>Intelligence:</b> {acumulative[0][0]}
              </p>
            </div>
            <div className="container-data">
              <p>
                <b>Strength:</b> {acumulative[0][1]}
              </p>
            </div>
            <div className="container-data">
              <p>
                <b>Speed:</b> {acumulative[0][2]}
              </p>
            </div>
            <div className="container-data">
              <p>
                <b>Durability:</b> {acumulative[0][3]}
              </p>
            </div>
            <div className="container-data">
              <p>
                <b>Power:</b> {acumulative[0][4]}
              </p>
            </div>
            <div className="container-data">
              <p>
                <b>Combat:</b> {acumulative[0][5]}
              </p>
            </div>
            <div className="container-higest">
              <h4>
                <b>Highest stat:</b> {maxStat}
              </h4>
            </div>
            
          </div>
        </div>
      )}

      <div className="container-title">
        <h1 className="group-title">Your group</h1>
        <Button
          text="STATS"
          className="button-stats"
          doSomething={handleStats}
        />
      </div>
      <div className="container-heroes">
        {selectedGroup.map((hero) => {
          return (
            <IndividualHero
              key={hero.id}
              hero={hero}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroupOfHeroes;
