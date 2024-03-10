import { FC } from "react";
import classNames from "classnames";
import Display from "./Display";
import Panel from "./Panel";
import "./Frame.css";

const Frame: FC = () => {
  return (
    <div className={classNames("frame", "flex")}>
      <Display />
      <Panel />
    </div>
  );
};

export default Frame;
