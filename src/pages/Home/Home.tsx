import { useEffect, useState } from "react";
import mock from "../../api/mock.json";
import BrasilMap from "../../components/Brasil/Brasil";
import { StateProps } from "../../components/Brasil/types";
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
  const [data, setData] = useState<{ data: StateProps[]; status: string }>();
  useEffect(() => {
    const req = () => {
      try {
        const response = mock;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, []);
  return (
    <section style={{ width: "70vw", maxWidth: "700px", margin: "0 auto" }}>
      <BrasilMap data={data} steps={100} />
      <SubTitltes />
    </section>
  );
};
