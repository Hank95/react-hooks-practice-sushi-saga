import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [cash, setCash] = useState(100);
  const [plates, setPlates] = useState([]);

  const handleSushi = (price) => {
    if (cash <= 0) return;
    setCash(cash - price);
    setPlates([...plates, 1]);
  };

  console.log(plates);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setSushi(json));
  }, []);

  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleSushi={handleSushi} cash={cash} />
      <Table cash={cash} plates={plates} />
    </div>
  );
}

export default App;
