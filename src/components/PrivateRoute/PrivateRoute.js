import React, { Fragment, PureComponent } from "react";
import { Route } from "react-router-dom";
import './PrivateRoute.css';
import Auth from "../Auth";
import Particles from "react-particles-js";
import particlesParams from "../../particles-params";

export default class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, to, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={() =>
          isAuthorized ? (
            <Component params={rest.computedMatch.params} />
          ) : (
            <Fragment>
              <Auth/>
              <Particles params={particlesParams} />
            </Fragment>
          )
        }
      />
    );
  }
}
