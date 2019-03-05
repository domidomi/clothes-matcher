import React, { Component } from "react";

import { history } from "./helpers";
import auth0 from "auth0-js";
import AUTH_CONFIG from "./auth.config";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authenticationActions, alertActions } from "../_actions";

class Auth extends Component {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    AUTH_CONFIG
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // alertSuccess("You are now logged in.");

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace("/");
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    // alertSuccess("You are now logged out.");
    localStorage.removeItem("isLoggedIn");

    // navigate to the home route
    history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}

Auth.propTypes = {
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  alertSuccess: PropTypes.func,
  alertError: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

const mapDispatchToProps = {
  logIn: authenticationActions.logIn,
  logOut: authenticationActions.logOut,
  alertSuccess: alertActions.success,
  alertError: alertActions.error
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
