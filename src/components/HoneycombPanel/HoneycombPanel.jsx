import React, { useContext, useState } from "react";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import { apiContext } from "../../views/Home/Home";

import "./HoneycombPanel.scss";

import IndividualPanel from "./IndividualPanel/IndividualPanel";
import LoadingSpinner from "../LoadingScreen/LoadingSpinner/LoadingSpinner";
import Modal from "../Modal/Modal";


const HoneycombPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { apiCharacters, isLoading } = useContext(apiContext);

  const handleShow = (item) => {
    setShowModal(true);
    setSelectedCharacter(item);
  };
  const handleHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="w-75 h-50 mt-4 rounded mx-auto container-honeycomb">
        {isLoading && (
          <div className="containter-loading">
            <LoadingSpinner />
          </div>
        )}

        {!isLoading && apiCharacters&&(
          <ResponsiveHoneycomb
            defaultWidth={1024}
            size={65}
            items={apiCharacters}
            renderItem={(item) => (
              <Hexagon>
                <IndividualPanel item={item} handleShow={handleShow} />
              </Hexagon>
            )}
          />
        )}
      </div>

      {showModal && (
          <Modal
            selectedCharacter={selectedCharacter}
            handleHide={handleHide}
          />
      )}
    </>
  );
};

export default HoneycombPanel;
