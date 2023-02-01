import "./App.css";
import { useState, useEffect } from "react";
import CatList from "./components/CatList";
import axios from "axios";

const kBaseUrl = "http://127.0.0.1:5000";

const transformResponse = (cat) => {
  const {
    caretaker,
    color,
    id,
    size,
    breed,
    name,
    likes_catnip: likesCatnip,
    pet_count: petCount,
  } = cat;
  return { caretaker, color, id, size, breed, name, likesCatnip, petCount };
};

const getAllCats = () => {
  return axios
    .get(`${kBaseUrl}/cats`)
    .then((response) => {
      return response.data.map(transformResponse);
    })
    .catch((error) => {
      console.log(error);
    });
};

const petCatWithId = (id) => {
  return axios
    .patch(`${kBaseUrl}/cats/${id}/pet`)
    .then((response) => {
      return transformResponse(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  const [catState, setCatState] = useState([]);

  const fetchCats = () => {
    getAllCats().then((cats) => {
      setCatState(cats);
    });
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const updateCat = (id) => {
    petCatWithId(id).then((updatedCat) => {
      setCatState((oldData) => {
        return oldData.map((cat) => {
          if (cat.id === id) {
            return updatedCat;
          }
          return cat;
        });
      });
    });
  };

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catState} petCatWithId={updateCat} />
    </main>
  );
}

export default App;
