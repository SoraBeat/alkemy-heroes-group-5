import "./LoadingScreen.scss";

import AnimatedFrame from "../AnimatedFrame/AnimatedFrame";
import BigLogo from "../logos/BigLogo";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const LoadingScreen = () => {
  return (
    <AnimatedFrame>
      <div className="container-loading">
        <BigLogo width="17rem" height="4rem" />
        <LoadingSpinner />{" "}
      </div>
    </AnimatedFrame>
  );
};

export default LoadingScreen;
