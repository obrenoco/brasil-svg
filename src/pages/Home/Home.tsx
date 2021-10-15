import React, { useEffect, useState } from "react";
import mock from "../../api/mock.json";
import BrasilMap from "../../components/Brasil/Brasil";

export type DataProps = {
  data: {
    data: {
      id: string;
      title: string;
      value: number;
    }[];
  };
};

type Data = {
  data: { id: string; title: string; value: number }[];
  status: string;
};

export const Home = () => {
  const [data, setData] = useState<Data>();
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
    <section className="w-4/6 max-w-2xl m-auto">
      <BrasilMap
        data={data}
        steps={100}
        colorSchema={{
          empty: "#c4c4c4",
          min: "#7AD599",
          max: "#2d4e2f",
          step1: "#569559",
          step2: "#3b683e",
        }}
        onClick={(e) => console.log(e)}
      />
    </section>
  );
};
