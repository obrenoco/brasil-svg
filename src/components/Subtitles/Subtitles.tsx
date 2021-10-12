import { ColorSchema } from "../Brasil/Brasil";
import "./index.css";

const square = (color: string) => (
  <div
    style={{
      height: "15px",
      width: "15px",
      backgroundColor: color,
      marginBottom: "2px",
    }}
  ></div>
);

export const SubTitltes = ({ step }: { step: number }) => {
  return (
    <ul className="subtitles">
      <li className="subtitle-item">
        {square(ColorSchema.Empty)}
        {step}
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Min)}
        {step * 2}
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Step1)}
        {step * 3}
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Step2)}
        {step * 4}
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Max)}
        {step * 4}
      </li>
    </ul>
  );
};
