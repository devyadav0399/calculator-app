import { FC } from "react";
import classNames from "classnames";
import { useCalculatorStore } from "../hooks/useCalculatorStore";
import "./Display.css";

const Display: FC = () => {
  const { value, leftOperand, operation } = useCalculatorStore();

  return (
    <div className={classNames("display", "flex")}>
      <div>
        <span className="ghost">
          {leftOperand && leftOperand}
          {operation && operation}
        </span>
      </div>
      <div>
        <span className="current">{value}</span>
      </div>
    </div>
  );
};

export default Display;
