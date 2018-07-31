import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Switch } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import Main from "../Main";

export default class AppRouter extends PureComponent {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" to="/trade" component={Main} exact />
      </Switch>
    );
  }
}
