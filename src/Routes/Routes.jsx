import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../component/Auth/Login";
import SignUp from "../component/Auth/SignUp";
import Home from "../component/Home/Home";

import WelcomePage from "../component/Welcome/Welcome";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/signup" exact>
          <SignUp/>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route to="/home">
          <Home/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
