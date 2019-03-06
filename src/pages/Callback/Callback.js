import React, { Component } from "react";
import * as auth from "../../utils/Auth";
import { Redirect } from "react-router-dom";

class Callback extends Component {
  componentWillMount() {
    auth.handleAuth();
  }

  render() {
    return (
      <div>
        Reticulating splines...
        <Redirect to="/" push={true} />
      </div>
    );
  }
}

export default Callback;
