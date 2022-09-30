import React, { useContext, useState,useRef } from "react";

import { apiContext } from "../../views/Home/Home";
import swal from "sweetalert";

import "./HoneycombPanel.scss";

import IndividualPanel from "./IndividualPanel/IndividualPanel";
import LoadingSpinner from "../LoadingScreen/LoadingSpinner/LoadingSpinner";
import Modal from "../Modal/Modal";

const HoneycombPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { apiCharacters, isLoading, selectedGroup, setSelectedGroup } =
    useContext(apiContext);

  const handleShow = (item) => {
    setShowModal(true);
    setSelectedCharacter(item);
  };
  const handleHide = () => {
    setShowModal(false);
  };
  const handleAdd = (item) => {
    if (item.biography.alignment === "neutral") {
      swal("You can't add this hero, it's neutral");
      return;
    }
    let goodCont = 0;
    let badCont = 0;
    let repeat = false;
    selectedGroup.map((hero) => {
      if (item.id === hero.id) {
        repeat = true;
      }
      if (hero.biography.alignment === "good") {
        goodCont++;
      } else if (hero.biography.alignment === "bad") {
        badCont++;
      }
    });
    if (repeat) {
      swal("You already have this hero in the group ");
    } else if (item.biography.alignment === "good" && goodCont < 3) {
      setSelectedGroup([...selectedGroup, item]);
    } else if (item.biography.alignment === "good" && goodCont >= 3) {
      swal("To many good heroes");
    } else if (item.biography.alignment === "bad" && badCont < 3) {
      setSelectedGroup([...selectedGroup, item]);
    } else {
      swal("To many bad heroes");
    }
  };

  return (
    <>
      <div className="w-75 h-50 mt-4 rounded mx-auto container-honeycomb">
        {isLoading && (
          <div className="containter-loading">
            <LoadingSpinner />
          </div>
        )}
        <div className="container-8col">
          {!isLoading &&
            apiCharacters.map((item,index) => {
              return (
                <IndividualPanel
                  index={index}
                  key={item.id}
                  item={item}
                  handleShow={handleShow}
                  handleAdd={handleAdd}
                />
              );
            })}
        </div>
      </div>

      {showModal && (
        <Modal selectedCharacter={selectedCharacter} handleHide={handleHide} />
      )}
    </>
  );
};

export default HoneycombPanel;
