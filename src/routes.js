import React from "react";
import { Route, Router } from "react-router-dom";

import { Homepage, Callback, Login } from "./pages";
import { Toolbar } from "./components";

import App from "./containers/App/App";
import Auth from "./utils/Auth";
import history from "./utils/history";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="app">
        <Toolbar auth={auth} />
        <div className="container">
          <Route exact path="/" render={props => <App auth={auth} {...props} />} />
          <Route
            path="/homepage"
            render={props => <Homepage auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route
            path="/login"
            render={props => <Login auth={auth} {...props} />}
          />
        </div>
      </div>
    </Router>
  );
};
