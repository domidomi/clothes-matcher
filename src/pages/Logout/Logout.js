import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { logOut as logOutAction } from "../../actions/authentication.actions";

class Logout extends Component {
  componentWillMount() {
    this.props.logOut();
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  logOut: PropTypes.func
};

const mapDispatchToProps = {
  logOut: logOutAction
};

export default connect(
  {},
  mapDispatchToProps
)(Logout);
