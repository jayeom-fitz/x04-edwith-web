import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Todo from "../routes/Todo";
import Write from "../routes/Write";

function RouteTodo() {
  return (
    <Router>
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/todo/write" component={Write} />
    </Router>
  );
}

export default RouteTodo;