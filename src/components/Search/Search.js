import React from "react";
import "./Search.css";

const Search = props => (
  <form >
    <div id="search" className="form-group">
      <label htmlFor="search"></label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For a Movie"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>
);

export default Search;
