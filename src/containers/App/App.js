import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Homepage } from "../../pages";
import { Toolbar } from "../../components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Toolbar />

          <div className="container">
            <Route exact path="/" component={Homepage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
