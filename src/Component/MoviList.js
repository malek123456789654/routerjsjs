import React, { useState } from "react";
import { data } from "./Data";
import MoviCard from "./MoviCard";
import "../App.css";
function MoviList() {
  const [movis, setMovis] = useState(data);
  return (
    <div className="MoviLst">
      {movis.map((el) => (
        <MoviCard el={el} />
      ))}
    </div>
  );
}

export default MoviList;
