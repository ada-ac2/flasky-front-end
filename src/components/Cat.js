import React, { useState } from "react";
import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  const [petCount, setPetCount] = useState(0);

  const petCat = () => {
    setPetCount(petCount + 1);
  };

  const likesCatnip = props.likesCatnip ? "true" : "false";

  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Likes Catnip: {likesCatnip}</h4>
      <h4>Cat has been pet {petCount} times</h4>
      <button onClick={petCat}>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  likesCatnip: PropTypes.bool,
};

Cat.defaultProps = {
  caretaker: "N/A",
  likesCatnip: false,
};

export default Cat;
