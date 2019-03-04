import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Homepage, Login, Logout } from "../../pages";
import { Toolbar } from "../../components";

import "./App.scss";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router>
        <div className="app">
          <Toolbar isLoggedIn={isLoggedIn} />
          {isLoggedIn ? "logged in" : "not logged in"}
          <div className="container">
            <Route exact path="/" component={Homepage} />
            {isLoggedIn && <Route exact path="/logout" component={Logout} />}

            {!isLoggedIn && <Route exact path="/login" component={Login} />}
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
  isLoggedIn: state.authentication.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
