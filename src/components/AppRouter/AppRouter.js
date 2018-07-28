import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

export default class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute path="/" component={Welcome} exact />
          <Route path="/profile" component={Welcome} />
        </Switch>
      </main>
    );
  }
}

const Welcome = () => <h1>Hello world!</h1>;
