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
        <img
          src="https://i.imgur.com/NfKqtes.png"
          style={{ width: "2.4rem", height: "2.4rem" }}
        ></img>
      </a>
    </div>
  );
}
