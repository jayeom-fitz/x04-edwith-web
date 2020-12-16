import React from "react";
import { Route } from "react-router-dom";
import Home from "../routes/Home";

function RouteA() {
  return (
    <>
      <Route exact path="/a" component={Home} />
    </>
  );
}

export default RouteA;