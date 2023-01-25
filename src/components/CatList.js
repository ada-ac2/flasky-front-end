import React from "react";
import Cat from "./Cat";

const CatList = () => {
  return (
    <section>
      <h2>All Cats</h2>
      <ul>
        <Cat />
        <Cat />
        <Cat />
      </ul>
    </section>
  );
};

export default CatList;
