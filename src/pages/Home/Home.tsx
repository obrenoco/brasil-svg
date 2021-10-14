import { useEffect, useState } from "react";
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
      <BrasilMap data={data} steps={100} onClick={(e) => console.log(e)} />
    </section>
  );
};
