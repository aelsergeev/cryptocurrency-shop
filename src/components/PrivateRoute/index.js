import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { getIsAuthorized } from '../../modules/auth/selector';

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
