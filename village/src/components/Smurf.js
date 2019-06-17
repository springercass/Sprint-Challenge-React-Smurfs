import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  console.log(props);
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <button onClick={event => props.deleteSmurf(event, props.id)}>
        Delete
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
