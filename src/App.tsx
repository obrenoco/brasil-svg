import Tippy from "@tippyjs/react";
import React from "react";
import "./index.css";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-center text-7xl w-full m-auto my-7">Brasil SVG</h1>
      <Home />
      <Tippy content="Made with ❤️" placement="top-start">
        <a
          href="https://github.com/obrenoco/brasil-svg"
          target="_blank"
          rel="noreferrer"
          id="author"
          className="fixed bottom-3 right-8 no-underline text-xl"
        >
          <img
            src="https://i.imgur.com/NfKqtes.png"
            alt="Link to project on Github."
            className="w-10 h-10"
          ></img>
        </a>
      </Tippy>
    </div>
  );
}
