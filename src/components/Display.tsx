import { FC } from "react";
import classNames from "classnames";

import { useStore } from "../../store";
import "./Display.css";

const Display: FC = () => {
  const { value, leftOperand, operation } = useStore((store) => store);
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
