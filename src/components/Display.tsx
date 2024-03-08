import { FC } from "react";
import "./Display.css";
import classNames from "classnames";

const Display: FC = () => {
  return (
    <div className={classNames('display', 'flex')}>
      <span>80085</span>
    </div>
  );
};

export default Display;
