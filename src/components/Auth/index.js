import { connect } from 'react-redux';
import Auth from './Auth';
import { registrationRequest, loginRequest } from '../../modules/auth';

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  loginError: state.auth.loginError,
  registrationError: state.auth.registrationError,
});

const mapDispatchToProps = {
    loginRequest,
    registrationRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
