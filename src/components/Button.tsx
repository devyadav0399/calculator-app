import { FC } from "react";
import classNames from "classnames";
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
