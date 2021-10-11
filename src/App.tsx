import React from "react";
import "./index.css";
import { Home } from "./pages/Home/Home";

export default function App() {
  // const [data, setData] = useState<DataProps>();

  // useEffect(() => {
  //   const req = () => {
  //     try {
  //       // const response = mock as DataPrps;
  //       // setData(response);
  //     } catch (error) { }
  //   };
  //   req();
  // }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Brasil SVG</h1>
      <Home />
      <a
        href="https://github.com/obrenoco/brasil-svg"
        target="_blank"
        id="author"
      >
        Made by: Brenoco
      </a>
    </div>
  );
}
