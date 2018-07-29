import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Switch } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import Wallet from "../Wallet";

export default class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute path="/" to="/trade" component={Wallet} exact />
          {/*<PrivateRoute path="/trade" component={Wallet} />*/}
        </Switch>
      </main>
    );
  }
}
