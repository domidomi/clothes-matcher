import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logIn as logInAction } from "../../actions/loginActions";

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { logIn, isLoggedIn } = this.props;

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
            <button className="btn btn-primary" onClick={() => logIn()}>
              Login
            </button>

            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func
};

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn
});

const mapDispatchToProps = {
  logIn: logInAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
