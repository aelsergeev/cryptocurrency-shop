import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import Main from "../Main";
import Auth from "../Auth";

export default class AppRouter extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth} />
        <PrivateRoute path="/trade/:coins" component={Main} />
        <Redirect to="/" from="*" />
      </Switch>
    );
  }
}
