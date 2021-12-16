import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    "border-radius": "50px",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <div className="col-10 col-sm-10 col-lg-6">
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search brand.."}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
