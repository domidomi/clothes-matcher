import React, { Component } from "react";
import * as auth from "../../utils/Auth";

class Homepage extends Component {
  render() {
    const { isLoggedIn } = this.props;
    
    return <div>Homepage

    {
      isLoggedIn && (
          <h4>
            You are logged in!

            <a
              style={{ cursor: 'pointer' }}
              onClick={auth.logout}
            >
              Log out
            </a>
          </h4>
        )
    }
    {
      !isLoggedIn && (
          <h4>
            You are not logged in! Please{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={auth.login}
            >
              Log In
            </a>
            {' '}to continue.
          </h4>
        )
    }
      
    </div>;
  }
}

export default Homepage;
