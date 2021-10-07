import Brasil from "../../components/Brasil/Brasil";
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

type ComponentProps = {
  id: string;
  color: string;
  title: string;
  value: string | number;
  onClick: () => any
  stroke: string
}

const Component = ({ id, color, title, stroke = "#fffff", value, onClick }: ComponentProps) => {
  return (
    <path
      onClick={onClick}
      id={id}
      stroke={stroke}
      strokeWidth="282.23677982"
      fill={color}
    >
      <title>{title} - {value}</title>
    </path>
  )
}

export const Home = () => {


  return (
    <section style={{ width: "70vw", maxWidth: "700px", margin: "0 auto" }}>
      <Brasil />
      <SubTitltes />
    </section>
  );
};
