import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "../../utils/helpers";
import { Homepage, Login, Logout, Callback } from "../../pages";
import { Toolbar } from "../../components";

import Auth from "../../utils/Auth";
import { alertActions as alert } from "../../_actions/alert.actions";

import "./App.scss";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alert.clear());
    });
  }

  render() {
    const { isLoggedIn, alert } = this.props;

    return (
      <Router history={history}>
        <div className="app">
          <Toolbar isLoggedIn={isLoggedIn} />
          {isLoggedIn ? "logged in" : "not logged in"}
          <div className="container">
            {/* {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )} */}
            <Route
              exact
              path="/"
              render={props => <Homepage auth={auth} {...this.props} />}
            />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />

            {isLoggedIn && <Route exact path="/logout" component={Logout} />}
            <Route exact path="/logout" component={Logout} />

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
