import classNames from "classnames";
import { FC } from "react";
import "./Button.css";

const Button: FC<ButtonProps> = ({ name, alt }) => {
  return (
    <div className={classNames("btn", "flex", "centered", { 'btn-alt': alt })}>
      {name}
    </div>
  );
};

export default Button;
