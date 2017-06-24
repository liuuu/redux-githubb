// flow
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

declare var module: {
  hot: {
    accept: () => void
  }
};

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
