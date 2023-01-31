import "./App.css";
import { useState } from "react";
import CatList from "./components/CatList";

function App() {
  const initialCatData = [
    {
      id: 0,
      name: "Whiskers",
      caretaker: "Farah",
      likesCatnip: true,
      petCount: 25,
    },
    {
      id: 1,
      name: "Fang",
      caretaker: "Luciana",
      likesCatnip: false,
      petCount: 0,
    },
    {
      id: 2,
      name: "Beetle",
      caretaker: "Aya",
      likesCatnip: true,
      petCount: 15,
    },
  ];

  const [catState, setCatState] = useState(initialCatData);

  const petCatWithId = (id) => {
    const newCatState = catState.map((cat) => {
      if (cat.id === id) {
        const newCat = { ...cat };
        newCat.petCount = cat.petCount + 1;
        return newCat;
      }
      return cat;
    });

    setCatState(newCatState);
  };

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catState} petCatWithId={petCatWithId} />
    </main>
  );
}

export default App;
