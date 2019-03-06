import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./_store";

import App from "./containers/App/App";

const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );


let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<App {...state} />, rootElement);
};

/* eslint no-restricted-globals: 0*/

let initialState = {
  isLoggedIn: false,
  signup: function() {
    window.open(
      "https://auth0.com/signup?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-react",
      "_blank"
    );
  }
};

window.setState(initialState);