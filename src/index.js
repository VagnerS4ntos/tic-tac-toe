import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

document.title = "Tic tac toe";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
