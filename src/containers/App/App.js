import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "../../utils/helpers";
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

  render() {
    const { isLoggedIn, profile, alert } = this.props;
    console.log("TCL: App -> render -> profile", profile);
    console.log("TCL: App -> render -> isLoggedIn", isLoggedIn);

    return (
      <Router>
        <div className="app">
          <Toolbar isLoggedIn={isLoggedIn} />
          {isLoggedIn ? "logged in" : "not logged in"}
          <div className="container">
            <Route
              exact
              path="/"
              render={props => <Homepage {...this.props} />}
            />
            <Route path="/callback" component={Callback} />

            {isLoggedIn && <Route exact path="/logout" component={Logout} />}
            <Route exact path="/logout" component={Logout} />

            {!isLoggedIn && <Route exact path="/login" component={Login} />}
            {/* <Redirect to="/" /> */}
          </div>
        </div>
      </Router>
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
