import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { auth } = this.props;

    const isAuthenticated = auth.isAuthenticated() || false;

    return (
      <div>
        Is logged? {isAuthenticated ? "yes" : "no"}
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
            <button
              className="btn btn-primary"
              onClick={() => this.props.auth.login()}
            >
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

// Login.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   isLoggedIn: state.authentication.isLoggedIn
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(Login);

export default Login;
