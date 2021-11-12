import { Fragment, useEffect, useState } from "react";
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
        steps={{
          empty: {
            step: 0,
            color: "#c4c4c4",
            placeholder: <Fragment>Empty</Fragment>,
          },
          min: {
            step: 1,
            color: "#7AD599",
            placeholder: <Fragment>R$ 0</Fragment>,
          },
        }}
        stroke="#7c7c7c"
        onClick={(e) => console.log(e)}
      />
    </section>
  );
};
