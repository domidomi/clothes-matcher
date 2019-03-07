import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

import { Homepage, Callback, Login } from "../../pages";
import { Toolbar } from "../../components";

// import App from "./containers/App/App";
import Auth from "../../utils/Auth";
import history from "../../utils/history";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }

    history.listen((location, action) => {
      // clear alert on location change
      // dispatch(alert.clear());

      console.log("something in history changed");
    });

    return (
      <Router history={history}>
        <div className="app">
          <Toolbar auth={auth} />
          <div className="container">
            
            <Route
              path="/"
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
  }
}

export default App;