import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import RouteA from "../project-A/components/RouteA";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />

      <RouteA />
    </Router>
  );
}

export default App;
