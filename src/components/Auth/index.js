import { connect } from 'react-redux';
import Auth from './Auth';
import { registrationRequest, loginRequest } from '../../modules/auth';
import Particles from 'react-particles-js';
import particlesParams from '../../particles-params';
import React from 'react';

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  loginError: state.auth.loginError,
  registrationError: state.auth.registrationError
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
