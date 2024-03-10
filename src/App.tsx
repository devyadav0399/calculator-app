import { FC } from "react";
import classNames from "classnames";
import Frame from "./components/Frame";

const App: FC = () => {
  return (
    <div className={classNames("App", "flex", "centered")}>
      <Frame />
    </div>
  );
};

export default App;
