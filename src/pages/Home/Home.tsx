import React, { useEffect, useState } from "react";
import mock from "../../api/mock.json";
import BrasilMap from "../../components/Brasil/Brasil";
import { StateProps } from "../../components/Brasil/types";

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
  const [data, setData] =
    useState<{ data: StateProps[]; status: string; onClick: () => any }>();
  useEffect(() => {
    const req = () => {
      try {
        const response = mock;
        setData(response as any);
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
        handleClick={(e: React.MouseEvent<HTMLElement>) => console.log(e)}
      />
    </section>
  );
};
