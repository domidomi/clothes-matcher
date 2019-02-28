import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Homepage } from "../../pages";
import { Toolbar } from "../../components";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Toolbar />

          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
