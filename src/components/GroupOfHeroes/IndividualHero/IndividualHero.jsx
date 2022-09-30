import React, { useRef, useEffect } from "react";
import "./IndividualHero.scss";
import BackupImage from "../../../assets/images/backup-image.png";
import {FaMinus} from "react-icons/fa"

const IndividualHero = (props) => {
  const image = useRef();
  const secondaryDiv = useRef();

  useEffect(() => {
    image.current.style.backgroundImage =
      "url(" + props.hero.image.url + "),url(" + BackupImage + ")";
      if(props.hero.biography.alignment==="good"){
        secondaryDiv.current.style.backgroundColor="rgba(35, 138, 26, 0.843)";
      }else{
        secondaryDiv.current.style.backgroundColor="rgba(187, 36, 36, 0.77)";
      }
    
  }, []);

  return (
  <div className="container-hero" ref={image}>
    <div className="container-delete" ref={secondaryDiv}>
      <button className="minus-hero" onClick={()=>props.handleDelete(props.hero.id)}>
        <FaMinus color="white" size={50}/>
      </button>
    </div>
  </div>
  )
};

export default IndividualHero;
