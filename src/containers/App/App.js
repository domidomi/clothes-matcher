import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Homepage, Callback, Login } from "../../pages";
import { Alert, Toolbar } from "../../components";

// import App from "./containers/App/App";
import Auth from "../../utils/Auth";
import history from "../../utils/history";

import { alertActions } from "../../_actions";

import "./App.scss";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { alertMessage, alertType } = this.props;

    return (
      <Router history={history}>
        <div className="app">
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
          <Toolbar auth={auth} />
          <div className="container">
            <Route
              path="/"
              render={props => <Homepage auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              exact
              render={props => <Callback {...props} auth={auth} />}
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

App.propTypes = {
};

const mapStateToProps = state => ({
  alertType: state.alert.type,
  alertMessage: state.alert.message
});

export default connect(
  mapStateToProps,
  {}
)(App);
