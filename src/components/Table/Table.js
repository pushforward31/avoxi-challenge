import React from "react";
import "./Table.css";

const Table = props => (
  <div className="text-center">
  
  <h2>{props.heading}</h2>
    <img
      alt={props.title}
      className="img-responsive"
      src={props.src}
      style={{ margin: "0 auto" }}
    />

  <div id= "table">
      <table className="table table-bordered  ">
      <tbody>
      <tr>
        <td>Director(s)</td>
        <td>{props.director}</td>
      </tr>
      <tr>
        <td>Genre</td>
        <td>{props.genre}</td>
      </tr>
      <tr>
        <td>Released</td>
        <td>{props.released}</td>
      </tr>
      <tr>
        <td>Plot</td>
        <td>{props.plot}</td>
      </tr>
      <tr>
        <td>Rated</td>
        <td>{props.rated}</td>
      </tr>
      <tr>
        <td>Runtime</td>
        <td>{props.runtime}</td>
      </tr>
      <tr>
        <td>Year</td>
        <td>{props.year}</td>
      </tr>
      <tr>
        <td>imdbRating</td>
        <td>{props.imd}</td>
      </tr>
      <tr>
        <td>Website</td>
        <td>{props.website}</td>
      </tr>
    </tbody>
    </table>
</div>
</div>
);

export default Table;
