import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as auth from "../../utils/Auth";

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        Is logged? {isLoggedIn ? "yes" : "no"}
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={"form-group"}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" />
          </div>
          <div className={"form-group"}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={() => auth.login()}>
              Login
            </button>

            {/* <Link to="/register" className="btn btn-link">
              Register
            </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(Login);
