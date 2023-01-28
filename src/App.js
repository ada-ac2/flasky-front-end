import "./App.css";
import CatList from "./components/CatList";

function App() {
  const catData = [
    {
      name: "Whiskers",
      caretaker: "Farah",
      likesCatnip: true,
      petCount: 1357,
    },
    {
      name: "Fang",
      caretaker: "Luciana",
      likesCatnip: false,
      petCount: 8267,
    },
    {
      name: "Beetle",
      caretaker: "Aya",
      likesCatnip: true,
      petCount: 2468,
    },
  ];

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catData} />
    </main>
  );
}

export default App;
