import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

  render() {
    const { auth } = this.props;

    const isAuthenticated = auth.isAuthenticated() || false;

    return (
      <div>
        <h4>You have to log in to browse the app</h4>
        {!isAuthenticated && (
          <button
            id="qsLoginBtn"
            bsStyle="primary"
            className="btn-margin"
            onClick={() => auth.login()}
          >
            Log In
          </button>
        )}
        {isAuthenticated && (
          <button
            id="qsLogoutBtn"
            bsStyle="primary"
            className="btn-margin"
            onClick={() => auth.logout()}
          >
            Log Out
          </button>
        )}
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

// App.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   auth: PropTypes.object
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.authentication.isAuthenticated,
//   auth: state.authentication.auth
// });

// const mapDispatchToProps = {
//   logIn: authentication.logIn,
//   logOut: authentication.logOut
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
