import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

axios.defaults.baseURL = "https://wed1830-backend.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
