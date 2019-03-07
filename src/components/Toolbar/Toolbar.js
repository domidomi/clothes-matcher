import React, { Component } from "react";
import { Link } from "react-router-dom";

// import classes from "./Toolbar.scss";
import "./Toolbar.scss";

class Toolbar extends Component {
  render() {
    const { auth } = this.props;

    const isAuthenticated = auth.isAuthenticated();

    return (
      <div className="toolbar">
        <ul>
          <div className="toolbar__links">
            <li>
              <Link to="/homepage">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/items/my">My items</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/sets/my">My sets</Link>
              </li>
            )}
          </div>

          <div className="toolbar__links">
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/" onClick={() => auth.logout()}>
                  Log out
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
