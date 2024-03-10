import { FC, useEffect } from "react";
import classNames from "classnames";
import Button from "./Button";
import { isSingleDigit } from "../utils/checker";
import { useCalculatorStore } from "../hooks/useCalculatorStore";
import { useHandleKeyDown } from "../hooks/useHandleKeyDown";
import "./Panel.css";

const Panel: FC = () => {
  const { updateValue, resetValue, startOperation, finishOperation } =
    useCalculatorStore();

  const { handleKeyDown } = useHandleKeyDown();

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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
