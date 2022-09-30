import "./LoadingScreen.scss";


import BigLogo from "../logos/BigLogo";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const LoadingScreen = () => {
  return (

      <div className="container-loading">
        <BigLogo width="17rem" height="4rem" />
        <LoadingSpinner />{" "}
      </div>

  );
};

export default LoadingScreen;
