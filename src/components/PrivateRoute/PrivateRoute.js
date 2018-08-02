import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './PrivateRoute.css';

export default class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={() => (isAuthorized ? <Component params={rest.computedMatch.params} /> : <Redirect to="/" />)}
      />
    );
  }
}
