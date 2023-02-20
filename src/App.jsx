import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

let dataEl = data.map((card) => {
  return <Card data={card} key={card.id} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      {dataEl}
    </div>
  );
}

export default App;
