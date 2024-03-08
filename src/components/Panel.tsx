import { FC } from "react";
import "./Panel.css";
import Button from "./Button";
import classNames from "classnames";

const Panel: FC = () => {
  return (
    <div className={classNames("panel", "flex")}>
      <div className={classNames("row", "flex")}>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="+" />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="x" />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="C" alt={true}/>
        <Button name="0" />
        <Button name="=" />
        <Button name="/" />
      </div>
    </div>
  );
};

export default Panel;
