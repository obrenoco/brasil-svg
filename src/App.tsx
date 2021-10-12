import React from "react";
import "./index.css";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Brasil SVG</h1>
      <Home />
      <a
        href="https://github.com/obrenoco/brasil-svg"
        target="_blank"
        rel="noreferrer"
        id="author"
      >
        Made by: Brenoco
      </a>
    </div>
  );
}
