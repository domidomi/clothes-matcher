import React, { useState, useContext, useEffect } from "react";
import { Route, Router } from "react-router-dom";

import { Homepage, Login } from "../../pages";
import { Alert, Toolbar } from "../../components";

import history from "../../utils/history";
import { useSelectors } from "use-redux";
import { alertActions } from "../../_actions";

import { FirebaseContext } from "../../utils/Firebase";
import * as APIcalls from "../../utils/APIcalls";

import "./App.scss";

// Some selectors
const alertSelector = state => state.alert;

const App = () => {
  const [user, setUser] = useState();
  const [alert] = useSelectors(alertSelector);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.authRef.onAuthStateChanged(async user => {
      const userData = user
        ? await APIcalls.fetchUserData(firebase, user)
        : null;

      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });

    return () => {
      // Stop listening to changes
      unsubscribe();
    };
  }, []);

  return (
    <Router history={history}>
      <div className="app">
        {user && <h2>User is: {user.name}</h2>}
        {user && console.log(user)}
        {alert && <Alert message={alert.message} type={alert.type} />}
        {/* <Toolbar auth={null} /> */}
        <div className="container">
          {/* <Route
            path="/"
            render={props => <Homepage auth={null} {...props} />}
          />
          <Route
            path="/callback"
            exact
            render={props => <Callback {...props} auth={null} />}
          />
          <Route
            path="/login"
            render={props => <Login auth={null} {...props} />}
          /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
