import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MoviList from "./Component/MoviList";
import Home from "./Component/Home";
import Description from "./Component/Description";
import Navigation from "./Component/Navigation";
import { data } from "./Component/Data";
import { useState } from "react";
function App() {
  const [movis, setMovis] = useState(data);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/mivilist" element={<MoviList />} />
        <Route path="/movis/:id" element={<Description movis={movis} />} />
      </Routes>
    </div>
  );
}

export default App;
