import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TodoList from "../routes/TodoList";
import Write from "../routes/Write";
import TodoEdit from "../routes/TodoEdit"

function RouteTodo() {
  return (
    <Router>
      <Route exact path="/todo/list" component={TodoList} />
      <Route exact path="/todo/write" component={Write} />
      <Route exact path="/todo/edit/:id" component={TodoEdit}/>
    </Router>
  );
}

export default RouteTodo;