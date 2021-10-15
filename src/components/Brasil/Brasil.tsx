import Tippy from "@tippyjs/react";
import {
  SVGAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
import { SubTitltes } from "../Subtitles/Subtitles";
import "./index.css";
import { BrazilSvgProps, ColorSchema, DataProps, StateProps } from "./types";
import { initialData } from "./ufs";

type BrasilMapProps = {
  data?: DataProps;
  steps?: number;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => any;
  colorSchema?: {
    empty: string;
    min: string;
    step1: string;
    step2: string;
    max: string;
  };
} & SVGAttributes<SVGElement>;

export const mappedData = (array: StateProps[]) =>
  Object.assign(
    {},
    ...array.map((item) => ({
      [item.id]: { id: item.id, title: item.title, value: item.value },
    }))
  );

export const mappedInitialData = (array: BrazilSvgProps[]) =>
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

const BrasilMap = ({
  data,
  stroke = "#fff",
  strokeWidth = "450",
  steps = 1,
  onClick,
  colorSchema,
  className,
  ...props
}: BrasilMapProps) => {
  const [items, setItems] = useState<BrazilSvgProps[]>(initialData);
  const mapped = useMemo(() => mappedData(items), [items]);

  const heatmapColor = useCallback(
    (value: number) => {
      if (value === 0) return colorSchema?.empty || ColorSchema.Empty;
      if (value < steps * 2) return colorSchema?.min || ColorSchema.Min;
      if (value < steps * 3) return colorSchema?.step1 || ColorSchema.Step1;
      if (value < steps * 4) return colorSchema?.step2 || ColorSchema.Step2;
      if (value >= steps * 4) return colorSchema?.max || ColorSchema.Max;
      return "white";
    },
    [steps, colorSchema]
  );

  useEffect(() => {
    if (data)
      return setItems(
        (data?.data).map((x: any) => ({
          ...x,
          path: mappedInitialData(initialData)[x.id].path,
        }))
      );
  }, [data]);

  const States = useMemo(
    () =>
      items.map((x) => (
        <Tippy
          key={x.id}
          content={
            <span>
              {x.title} - {x.value}
            </span>
          }
          followCursor
          plugins={[followCursor]}
        >
          <path
            id={x.id}
            key={x.id}
            d={x.path}
            onClick={onClick}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={`${heatmapColor(mapped[x.id].value)}`}
            className={`cursor-pointer ${className}`}
          >
            <title>
              {x.title} - {x.value}
            </title>
          </path>
        </Tippy>
      )),
    [items, className, heatmapColor, mapped, onClick, stroke, strokeWidth]
  );

  return (
    <div className="relative">
      <svg id="br-map" viewBox="0 0 220000 194010" {...props}>
        <g id="Estados">{States}</g>
      </svg>
      <SubTitltes step={steps} colorSchema={colorSchema} />
    </div>
  );
};

export default BrasilMap;
