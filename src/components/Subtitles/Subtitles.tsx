import { ColorSchema } from "../Brasil/Brasil";
import "./index.css";

const square = (color: string) => (
  <div
    style={{
      height: "22px",
      width: "22px",
      backgroundColor: color,
      marginBottom: "2px",
      borderRadius: "5px",
    }}
  ></div>
);

export const SubTitltes = ({ step }: { step: number }) => {
  return (
    <ul className="subtitles">
      <li className="subtitle-item">
        {square(ColorSchema.Empty)}
        <strong>0</strong>
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Min)}
        <strong>{step}</strong>
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Step1)}
        <strong>{step * 2}</strong>
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Step2)}
        <strong>{step * 3}</strong>
      </li>
      <li className="subtitle-item">
        {square(ColorSchema.Max)}
        <strong>{step * 4}</strong>
      </li>
    </ul>
  );
};
