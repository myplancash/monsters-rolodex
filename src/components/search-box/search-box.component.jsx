import React from "react";
import './search-box.styles.css';

export const SearchBox = ({handleChange, term}) => {

  return (
    <div className="ui fluid action input">
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={handleChange}
        value={term}
      />
      <div className="ui button">Search</div>
    </div>
  );

}
