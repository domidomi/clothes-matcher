import React, { Component } from "react";
import { connect } from "react-redux";

import { ALERT_DISPLAY_TIME } from "../../utils/const";
import { alertActions } from "../../_actions";

import "./Alert.scss";

class Alert extends Component {
  componentDidMount() {
    setTimeout(() => this.clearAlert(), ALERT_DISPLAY_TIME);
  }

  clearAlert() {
    const { clearAlerts } = this.props;
    clearAlerts();
  }

  render() {
    const { message, type } = this.props;

    return (
      <div className={`alert ${type}`} onClick={() => this.clearAlert()}>
        {message}
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  clearAlerts: alertActions.clear
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
