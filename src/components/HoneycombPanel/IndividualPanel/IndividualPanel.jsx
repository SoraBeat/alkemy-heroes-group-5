import { useRef, useEffect } from "react";
import "./IndividualPanel.scss";
import BackupImage from "../../../assets/images/backup-image.png";
import { FaEye, FaPlus } from "react-icons/fa";

const IndividualPanel = (props) => {
  const container = useRef();
  const overlay = useRef();
  useEffect(() => {
    container.current.style.backgroundImage =
      "url(" + props.item.image.url + "),url(" + BackupImage + ")";
    if (props.item.biography.alignment === "good") {
      overlay.current.style.backgroundColor = "#238a1ad7";
    } else {
      overlay.current.style.backgroundColor = "#bb2424c4";
    }
  }, []);
  return (
    <>
      <div ref={container} className="image-individual-panel">
        <p className="text-individual-panel">{props.item.name}</p>
      </div>
      <div className="overlay" ref={overlay}>
        <button onClick={() => props.handleShow(props.item)}>
          <FaEye color="white" size="40px" />
        </button>
        <button onClick={() => props.handleAdd(props.item)}>
          <FaPlus color="white" size="40px" />
        </button>
      </div>
    </>
  );
};

export default IndividualPanel;
