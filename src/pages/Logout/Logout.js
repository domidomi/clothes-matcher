import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentWillMount() {
    this.props.auth.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
