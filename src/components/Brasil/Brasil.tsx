import { useCallback, useEffect, useMemo, useState } from "react";
import { BrazilSvgProps, DataProps, StateProps } from "./types";
import { initialData } from "./ufs";

type ComponentProps = {
  id: string;
  color: string;
  title: string;
  value: string | number;
  onClick: () => any;
  stroke?: string;
  path: string;
};

export const mappedArray = (array: StateProps[]) =>
  Object.assign(
    {},
    ...array.map((item) => ({
      [item.id]: { id: item.id, title: item.title, value: item.value },
    }))
  );

export const mappedInitialArray = (array: BrazilSvgProps[]) =>
  Object.assign(
    {},
    ...array.map((item) => ({
      [item.id]: {
        id: item.id,
        title: item.title,
        value: item.value,
        path: item.path,
      },
    }))
  );

const State = ({
  id,
  color,
  title,
  stroke = "#ffffff",
  value,
  path,
  onClick,
}: ComponentProps) => {
  return (
    <path
      id={id}
      key={id}
      onClick={onClick}
      stroke={stroke}
      strokeWidth="282.23677982"
      fill={color}
      d={path}
    >
      <title>
        {title} - {value}
      </title>
    </path>
  );
};

type BrasilMapProps = {
  data?: DataProps;
  stroke?: string;
  steps?: number;
};

const BrasilMap = ({ data, stroke, steps = 1 }: BrasilMapProps) => {
  const [items, setItems] = useState<BrazilSvgProps[]>(initialData);
  const mapped = useMemo(() => mappedArray(items), [items]);
  const [color, setColor] = useState();

  const mappedInitial = mappedArray(items);

  console.log(color, setColor, stroke, setItems);

  const heatmapColor = useCallback((value: number) => {
    if (value <= 0) return "#c4c4c4";
    if (value <= steps) return "#7AD599";
    if (value <= steps * 2) return "#508C53";
    if (value <= steps * 3) return "#3E6E41";
    if (value >= steps * 3) return "#3E6E41";
    return "white";
  }, []);

  useEffect(() => {
    if (data)
      return setItems(
        (data?.data as any).map((x: any) => ({
          ...x,
          path: mappedInitialArray(initialData)[x.id].path,
        }))
      );
  }, [data]);

  return (
    <svg id="br-map" viewBox="0 0 220000 194010">
      <g id="Estados">
        {items.map((x) => {
          console.log(mapped[x.id].value);
          return (
            <State
              id={x.id}
              color={`${heatmapColor(mapped[x.id].value)}`}
              onClick={() => {}}
              title={x.title}
              value={x.value}
              key={x.id}
              path={x.path}
              stroke={stroke}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default BrasilMap;
