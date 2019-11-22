import React from "react";
import { Route, Switch } from "react-router-dom";
//import auth components
import Post from "../../../src/components/Post";

//import homepage components
import Home from "../../pages/Home";
//import userdash components
import Dashboard from "../../pages/Dashboard";
//import userdash components

//import private route

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Dashboard" component={Dashboard} />
        {/* <Route exact path="/profile/:id" component={Dashboard} /> */}
        <Route exact path="/post" component={Post} />

      </Switch>
    </section>
  );
};

export default Routes;
