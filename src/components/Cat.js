import React from "react";
import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  const petCat = () => {
    props.petCatWithId(props.id);
  };

  const likesCatnip = props.likesCatnip ? "True" : "False";

  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Likes Catnip: {likesCatnip}</h4>
      <h4>Cat has been pet {props.petCount} times</h4>
      <button onClick={petCat}>Pet Cat</button>
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
