import React from "react";

import "./SearchBar.scss";

import Title from "../titles/Title";
import InputText from "../Input/InputText";
import Button from "../Button/Button";

const SearchBar = () => {
  return (
    <div className="container-searchbar d-flex justify-content-between align-items-end mt-1">
      <div className="w-75">
        <Title text="Heroes search" />
        <InputText />
      </div>
      <div className="w-25">
        <Button
          text="Search"
          width="5rem"
          height="3rem"
          margin="0 0 0 10px"
          className="button-secondary"
        />
      </div>
    </div>
  );
};

export default SearchBar;
