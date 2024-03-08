import { FC } from "react";
import Frame from "./components/Frame";
import classNames from "classnames";

const App: FC = () => {
  return (
    <div className={classNames("App", "flex", "centered")}>
      <Frame />
    </div>
  );
};

export default App;
