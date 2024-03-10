import classNames from "classnames";
import { FC } from "react";

import { useStore } from "../../store";
import "./Button.css";

const Button: FC<ButtonProps> = ({ name, alt, clickHandler }) => {
  return (
    <div
      className={classNames("btn", "flex", "centered", { "btn-alt": alt })}
      onClick={() => clickHandler(name)}
    >
      {name}
    </div>
  );
};

export default Button;
