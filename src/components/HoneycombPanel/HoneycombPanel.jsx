import React, { useEffect, useContext } from "react";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import { apiContext } from "../../views/Home/Home";

import "./HoneycombPanel.scss";

const HoneycombPanel = () => {
  const { apiCharacters } = useContext(apiContext);

  return (
    <div className="w-75 h-50 mt-4 rounded mx-auto container-honeycomb shadow-lg">
      <ResponsiveHoneycomb
        defaultWidth={1024}
        size={65}
        items={apiCharacters}
        renderItem={(item) => (
          <Hexagon className="">
            <img src={item.image.url}/>
          </Hexagon>
        )}
      />
    </div>
  );
};

export default HoneycombPanel;
