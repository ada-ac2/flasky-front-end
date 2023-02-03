import React, { useState } from "react";

const kDefaultFormState = {
  name: "",
  color: "",
  breed: "",
  size: "",
  likesCatnip: "true",
};

const NewCatForm = ({ onCatDataReady }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {
      ...formData,
      [fieldName]: fieldValue,
    };

    setFormData(newFormData);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    onCatDataReady(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <section>
      <form onSubmit={formSubmit}>
        <h2>Register a Cat</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Likes Catnip</label>
          <input
            type="text"
            name="likesCatnip"
            value={formData.likesCatnip}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="Add Cat"></input>
        </div>
      </form>
    </section>
  );
};

export default NewCatForm;
