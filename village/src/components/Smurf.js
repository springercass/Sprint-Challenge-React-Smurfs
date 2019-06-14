import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Smurf;
