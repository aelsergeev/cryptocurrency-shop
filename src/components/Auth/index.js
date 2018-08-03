import { connect } from 'react-redux';
import Auth from './Auth';
import { registrationRequest, loginRequest } from '../../modules/auth/actions';
import Particles from 'react-particles-js';
import particlesParams from '../../particles-params';
import React from 'react';
import { getIsAuthorized, getLogginError, getRegistrationError } from "../../modules/auth/selector";

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  loginError: getLogginError(state),
  registrationError: getRegistrationError(state)
});

const mapDispatchToProps = {
  loginRequest,
  registrationRequest
};

const AuthConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default () => {
  return (
    <main>
      <AuthConnect />
      <Particles params={particlesParams} />
    </main>
  );
}
