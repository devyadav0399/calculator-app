import { FC } from "react";
import classNames from "classnames";
import { useCalculatorStore } from "../hooks/useCalculatorStore";
import "./Display.css";

const Display: FC = () => {
  const { value } = useCalculatorStore();
  return (
    <div className={classNames("display", "flex")}>
      <span>{value}</span>
    </div>
  );
};

export default Display;
