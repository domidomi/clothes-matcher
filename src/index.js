import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./_store";

import { makeMainRoutes } from "./routes";

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("root"));
