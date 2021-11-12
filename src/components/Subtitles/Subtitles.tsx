import React from "react";
import { BrasilMapProps } from "../Brasil/Brasil";
import { ColorSchema } from "../Brasil/types";

type SubtitleProps = Pick<BrasilMapProps, "steps">;

const itemClassName = "flex flex-col items-center";
const square = (color: string) => (
  <div
    className="w-5 h-5 mb-1 rounded-sm"
    style={{
      backgroundColor: color,
    }}
  ></div>
);

export const SubTitltes = ({ steps }: SubtitleProps) => {
  return (
    <ul className=" w-max px-1 py-4 no-underline text-sm flex text-white gap-6">
      <li className={itemClassName}>
        {square(steps.empty.color || ColorSchema.Empty)}
        {steps.empty.placeholder}
      </li>
      <li className={itemClassName}>
        {square(steps?.min.color || ColorSchema.Min)}
        {steps.min.placeholder}
      </li>
      {/* <li className={itemClassName}>
        {square(colorSchema?.min || ColorSchema.Min)}
        <strong>{step}</strong>
      </li>
      <li className={itemClassName}>
        {square(colorSchema?.step1 || ColorSchema.Step1)}
        <strong>{step * 2}</strong>
      </li>
      <li className={itemClassName}>
        {square(colorSchema?.step2 || ColorSchema.Step2)}
        <strong>{step * 3}</strong>
      </li>
      <li className={itemClassName}>
        {square(colorSchema?.max || ColorSchema.Max)}
        <strong>
          {">"}
          {step * 3}
        </strong>
      </li> */}
    </ul>
  );
};
