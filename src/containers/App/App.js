import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Homepage, Login } from "../../pages";
import { Toolbar } from "../../components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Toolbar />
          <div className="container">
            <Route exact path="/" component={Homepage} />

            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
