import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Homepage from "../../components/Homepage/Homepage";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
  ł;
}

export default App;
