import { connect } from 'react-redux';
import Wallet from './Wallet';
import { fetchWalletRequest } from '../../modules/wallet';

const mapStateToProps = state => ({ wallet: { ...state.wallet } });

const mapDispatchToProps = {
  fetchWalletRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
