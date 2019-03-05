import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./_store";

import App from "./containers/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
