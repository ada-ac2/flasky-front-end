import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData, petCatWithId }) => {
  const catComponents = catData.map((cat) => {
    return (
      <Cat
        key={cat.id}
        id={cat.id}
        name={cat.name}
        caretaker={cat.caretaker}
        likesCatnip={cat.likesCatnip}
        petCount={cat.petCount}
        petCatWithId={petCatWithId}
      />
    );
  });

  return (
    <section>
      <h2>Cat count: {catData.length}</h2>
      <ul>{catComponents}</ul>
    </section>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      caretaker: PropTypes.string,
      likesCatnip: PropTypes.bool,
      petCount: PropTypes.number,
    })
  ).isRequired,
};

export default CatList;
