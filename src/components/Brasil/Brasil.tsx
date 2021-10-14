import Tippy from "@tippyjs/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
import { SubTitltes } from "../Subtitles/Subtitles";
import "./index.css";
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

type BrasilMapProps = {
  data?: DataProps;
  stroke?: string;
  steps?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
};

export enum ColorSchema {
  Empty = "#c4c4c4",
  Min = "#7AD599",
  Step1 = "#569559",
  Step2 = "#3b683e",
  Max = "#2d4e2f",
}

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
    <Tippy
      content={
        <span>
          {title} - {value}
        </span>
      }
      followCursor
      plugins={[followCursor]}
    >
      <path
        id={id}
        key={id}
        onClick={onClick}
        stroke={stroke}
        strokeWidth="370"
        fill={color}
        d={path}
        className="cursor-pointer"
      >
        <title>
          {title} - {value}
        </title>
      </path>
    </Tippy>
  );
};

const BrasilMap = ({ data, stroke, steps = 1, onClick }: BrasilMapProps) => {
  const [items, setItems] = useState<BrazilSvgProps[]>(initialData);
  const mapped = useMemo(() => mappedArray(items), [items]);

  const heatmapColor = useCallback(
    (value: number) => {
      if (value === 0) return ColorSchema.Empty;
      if (value < steps * 2) return ColorSchema.Min;
      if (value < steps * 3) return ColorSchema.Step1;
      if (value < steps * 4) return ColorSchema.Step2;
      if (value >= steps * 4) return ColorSchema.Max;
      return "white";
    },
    [steps]
  );

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
    <div className="relative">
      <svg id="br-map" viewBox="0 0 220000 194010">
        <g id="Estados">
          {items.map((x) => {
            return (
              <State
                id={x.id}
                color={`${heatmapColor(mapped[x.id].value)}`}
                onClick={onClick as any}
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
      <SubTitltes step={steps} />
    </div>
  );
};

export default BrasilMap;
