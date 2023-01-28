import React from "react";
import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Likes Catnip: yes/no</h4>
      <h4>Pet count: {props.petCount}</h4>
      <button>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  likesCatnip: PropTypes.bool,
  petCount: PropTypes.number,
};

Cat.defaultProps = {
  caretaker: "N/A",
  likesCatnip: false,
  petCount: 0,
};

export default Cat;
