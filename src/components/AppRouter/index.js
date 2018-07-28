import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  error: state.network.message
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
