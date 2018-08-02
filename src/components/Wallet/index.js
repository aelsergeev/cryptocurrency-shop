import { connect } from 'react-redux';
import Wallet from './Wallet';

const mapStateToProps = state => ({ wallet: { ...state.wallet } });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
