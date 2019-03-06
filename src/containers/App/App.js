import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Homepage, Login, Logout, Callback } from "../../pages";
import { Toolbar } from "../../components";

import { alertActions as alert } from "../../_actions/alert.actions";

import "./App.scss";

class App extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   history.listen((location, action) => {
  //     // clear alert on location change
  //     dispatch(alert.clear());
  //   });
  // }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isLoggedIn, profile, alert } = this.props;

    const { isAuthenticated } = this.props.auth;
    return (
      // <Router history={history}>
      //   <div className="app">
      //     <Toolbar isLoggedIn={isAuthenticated()} auth={auth} {...this.props} />
      //     {isAuthenticated() ? "logged in" : "not logged in"}
      //     <div className="container">
      //       <Route
      //         exact
      //         path="/"
      //         render={props => <Homepage auth={auth} {...this.props} />}
      //       />
      //       <Route
      //         path="/callback"
      //         render={props => {
      //           handleAuthentication(props);
      //           return <Callback {...props} />;
      //         }}
      //       />

      //       {isAuthenticated() && (
      //         <Route
      //           exact
      //           path="/logout"
      //           render={props => <Logout auth={auth} {...this.props} />}
      //         />
      //       )}

      //       {!isAuthenticated() && (
      //         <Route
      //           exact
      //           path="/login"
      //           render={props => <Login auth={auth} {...this.props} />}
      //         />
      //       )}
      //     </div>
      //   </div>
      // </Router>

      <div className="app">
        <Toolbar isLoggedIn={isAuthenticated()} />
        {isAuthenticated() ? "logged in" : "not logged in"}
        <div className="container">
          {!isAuthenticated() && (
            <button
              id="qsLoginBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </button>
          )}
          {isAuthenticated() && (
            <button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   isLoggedIn: state.authentication.isLoggedIn,
//   alert: state.alert
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(App);

export default App;
