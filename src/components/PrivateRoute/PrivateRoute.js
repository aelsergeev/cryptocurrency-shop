import React, { Fragment, PureComponent } from "react";
import { Route } from "react-router-dom";
import './PrivateRoute.css';
import Auth from "../Auth";
import Particles from "react-particles-js";
import particlesParams from "../../particles-params";
import Header from "../Header";
import Section from "../Section";

export default class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={() =>
          isAuthorized ? (
            <Fragment>
              <Header />
              <Component params={rest.computedMatch.params} />
              <Section />
            </Fragment>
          ) : (
            <main>
              <Auth />
              <Particles params={particlesParams} />
            </main>
          )
        }
      />
    );
  }
}
