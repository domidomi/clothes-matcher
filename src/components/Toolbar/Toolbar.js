import React, { Component } from "react";
import { Link } from "react-router-dom";

// import classes from "./Toolbar.scss";
import "./Toolbar.scss";

class Toolbar extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="toolbar">
        <ul>
          <div className="toolbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/items/my">My items</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/sets/my">My sets</Link>
              </li>
            )}
          </div>

          <div className="toolbar__links">
            {!isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/logout">Log out</Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
