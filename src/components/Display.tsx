import { FC } from "react";
import classNames from "classnames";

import { useStore } from "../../store";
import "./Display.css";

const Display: FC = () => {
  const value = useStore((store) => store.value);
  return (
    <div className={classNames("display", "flex")}>
      <span>{value}</span>
    </div>
  );
};

export default Display;
