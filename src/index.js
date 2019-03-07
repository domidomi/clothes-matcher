import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./_store";

import App from "./containers/App/App";

ReactDOM.render(<App />, document.getElementById("root"));
