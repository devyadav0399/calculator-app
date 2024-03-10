import { FC } from "react";
import "./Panel.css";
import Button from "./Button";
import classNames from "classnames";
import { useStore } from "../../store";
import { isSingleDigit } from "../utils/checker";

const Panel: FC = () => {
  const updateValue = useStore((store) => store.updateValue);
  const resetValue = useStore((store) => store.resetValue);
  const startOperation = useStore((store) => store.startOperation);
  const finishOperation = useStore((store) => store.finishOperation);
  const state = useStore((store) => store)

  console.log(state)

  const clickHandler = (name: string) => {
    if (isSingleDigit(name)) {
      updateValue(name);
    } else if (name === "C") {
      resetValue();
    } else if (name === "+" || name === "-" || name === "x" || name === "/") {
      startOperation(name);
    } else if (name === "=") {
      finishOperation();
    } else {
      null;
    }
  };
  return (
    <div className={classNames("panel", "flex")}>
      <div className={classNames("row", "flex")}>
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
      </div>
      <div className={classNames("row", "flex")}>
        <Button name="C" alt={true} clickHandler={clickHandler} />
        <Button name="0" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
        <Button name="/" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default Panel;
