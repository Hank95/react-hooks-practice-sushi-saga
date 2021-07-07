import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handleSushi, cash }) {
  const [currentPage, setCurrentPage] = useState(0);

  const moreSushi = (e) => {
    console.log(sushiToShow);
    setCurrentPage(() => currentPage + 4);
  };
  const sushiToShow = sushi.slice(currentPage, currentPage + 4);
  return (
    <div className="belt">
      {sushiToShow.map((item) => {
        return (
          <Sushi
            key={item.id}
            sushi={item}
            handleSushi={handleSushi}
            cash={cash}
          />
        );
      })}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
