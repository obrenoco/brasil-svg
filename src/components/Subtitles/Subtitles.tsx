import { ColorSchema } from "../Brasil/Brasil";

const square = (color: string) => (
  <div
    className="w-5 h-5 mb-1 rounded-sm"
    style={{
      backgroundColor: color,
    }}
  ></div>
);

const itemClassName = "flex flex-col items-center";

export const SubTitltes = ({ step }: { step: number }) => {
  return (
    <ul className="relative bottom-14 left-5 w-max px-1 py-4 no-underline text-sm flex text-white gap-6">
      <li className={itemClassName}>
        {square(ColorSchema.Empty)}
        <strong>0</strong>
      </li>
      <li className={itemClassName}>
        {square(ColorSchema.Min)}
        <strong>{step}</strong>
      </li>
      <li className={itemClassName}>
        {square(ColorSchema.Step1)}
        <strong>{step * 2}</strong>
      </li>
      <li className={itemClassName}>
        {square(ColorSchema.Step2)}
        <strong>{step * 3}</strong>
      </li>
      <li className={itemClassName}>
        {square(ColorSchema.Max)}
        <strong>
          {">"}
          {step * 3}
        </strong>
      </li>
    </ul>
  );
};
