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

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <h4>You have to log in to browse the app</h4>
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
