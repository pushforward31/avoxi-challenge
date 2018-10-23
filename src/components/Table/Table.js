import React from "react";
import "./Table.css";

const Table = props => (
  <div className="text-center">
  
  
   

  <div id= "table">
      <table className="table table-bordered  ">
      <tr>
    <th>Poster</th>
    <th>Title</th>
    <th>Year</th> 
    <th>Type</th>
  </tr>
      <tbody>
      <tr>
        <td><img
      alt={props.title}
      className="img-responsive"
      src={props.src}
    /></td>
        <td>{props.title}</td>
        <td>{props.type}</td>
        <td>{props.year}</td>
      </tr>
      
    </tbody>
    </table>
</div>
</div>
);

export default Table;
