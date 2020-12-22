import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import BookList from "../routes/BookList";

function RouteBook() {
  return (
    <Router>
      <Route exact path="/todo/list" component={BookList} />
    </Router>
  );
}

export default RouteBook;