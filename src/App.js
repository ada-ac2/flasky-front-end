import "./App.css";
import CatList from "./components/CatList";

function App() {
  const catData = [
    {
      id: 0,
      name: "Whiskers",
      caretaker: "Farah",
      likesCatnip: true,
    },
    {
      id: 1,
      name: "Fang",
      caretaker: "Luciana",
      likesCatnip: false,
    },
    {
      id: 2,
      name: "Beetle",
      caretaker: "Aya",
      likesCatnip: true,
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
