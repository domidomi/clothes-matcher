import React from "react";
import ReactDOM from "react-dom";
import { ReduxProvider } from "use-redux";
import Firebase, { FirebaseContext } from "./utils/Firebase";
import store from "./_store";

import { App } from "./containers";

ReactDOM.render(
  <ReduxProvider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </ReduxProvider>,
  document.getElementById("root")
);
