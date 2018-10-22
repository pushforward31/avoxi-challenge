import React from "react";
import "./Container.css";

const Container = props => (
  <div id="holder" >
    {props.children}
  </div>
);

export default Container;
