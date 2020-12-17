import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import RouteTodo from "../project-todo/components/RouteTodo";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />

      <RouteTodo />
    </Router>
  );
}

export default App;
