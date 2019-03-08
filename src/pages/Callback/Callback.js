import React, { Component } from "react";
import loading from "./loading.svg";

class Callback extends Component {
  componentDidMount() {
    this.handleAuthentication(this.props);
  }

  handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.props.auth.handleAuthentication();
    }
  };

  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    };

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Callback;
