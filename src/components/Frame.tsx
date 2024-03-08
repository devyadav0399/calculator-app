import { FC } from "react";
import "./Frame.css";
import classNames from "classnames";
import Display from "./Display";
import Panel from "./Panel";

const Frame: FC = () => {
  return (
    <div className={classNames("frame", "flex")}>
      <Display />
      <Panel />
    </div>
  );
};

export default Frame;
