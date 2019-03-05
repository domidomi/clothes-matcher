import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "../../utils/helpers";
import { Homepage, Login, Logout } from "../../pages";
import { Toolbar } from "../../components";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { isLoggedIn, alert } = this.props;

    return (
      <Router>
        <div className="app">
          <Toolbar isLoggedIn={isLoggedIn} />
          {isLoggedIn ? "logged in" : "not logged in"}
          <div className="container">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Route
              exact
              path="/"
              render={props => <Homepage {...this.props} />}
            />
            <Route path="/callback" component={Callback} />

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
  isLoggedIn: state.authentication.isLoggedIn,
  alert: state.alert
});

export default connect(
  mapStateToProps,
  {}
)(App);
