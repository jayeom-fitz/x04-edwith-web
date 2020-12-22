import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import RouteTodo from "../project-todo/components/RouteTodo";
import RouteBook from "../project-book/components/RouteBook";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />

      <RouteTodo />
      <RouteBook />
    </Router>
  );
}

export default App;
