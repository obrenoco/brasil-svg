import BrasilMap from "../../components/Brasil/Brasil";
import { SubTitltes } from "../../components/Subtitles/Subtitles";
import "./index.css";

export type DataProps = {
  data: {
    data: {
      id: string;
      title: string;
      value: number;
    }[];
  };
};

export const Home = () => {
  return (
    <section style={{ width: "70vw", maxWidth: "700px", margin: "0 auto" }}>
      <BrasilMap />
      <SubTitltes />
    </section>
  );
};
