import React from "react";
import { Route, Switch } from "react-router-dom";
//import auth components

//import homepage components
import Home from "../../pages/home";
//import userdash components
import Dashboard from "../../pages/Dashboard";
//import private route

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
