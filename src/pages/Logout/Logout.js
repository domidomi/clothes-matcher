import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import * as auth from "../../utils/Auth";

class Logout extends Component {
  componentWillMount() {
    auth.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
