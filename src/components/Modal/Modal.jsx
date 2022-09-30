import React, { useRef, useEffect } from "react";


import { FaCompressArrowsAlt } from "react-icons/fa";
import BackupImage from "../../assets/images/backup-image.png";

import "./Modal.scss";

const Modal = (props) => {
  const image = useRef();

  useEffect(() => {
    image.current.style.backgroundImage =
      "url(" + props.selectedCharacter.image.url + "),url(" + BackupImage + ")";
  });

  return (

      <div className="modal-characters">
        <div className="container-cross">
          <button onClick={props.handleHide}>
            <FaCompressArrowsAlt color="white" size={30} />
          </button>
        </div>
        <h1 className="modal-title">{props.selectedCharacter.name}</h1>
        <div className="container-info">
          <img className="modal-image" ref={image} />
          <div className="container-caracteristics">
                <h2>Alias</h2>
                <p>{props.selectedCharacter.biography.aliases[0]}</p>
                <h2>Weight</h2>
                <p>{props.selectedCharacter.appearance.weight[1]}</p>
                <h2>Height</h2>
                <p>{props.selectedCharacter.appearance.height[1]}</p>
                <h2>Eye color</h2>
                <p>{props.selectedCharacter.appearance["eye-color"]}</p>
                <h2>Hair color</h2>
                <p>{props.selectedCharacter.appearance["hair-color"]}</p>
                
          </div>
        </div>
      </div>

  );
};

export default Modal;
