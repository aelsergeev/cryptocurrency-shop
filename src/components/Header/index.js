import { connect } from 'react-redux';
import Header from './Header';
import { selectBtc, selectEth } from "../../modules/currency";

const mapStateToProps = state => ({
  ethPrice: state.currency.eth[0] && state.currency.eth[0].sell,
  btcPrice: state.currency.btc[0] && state.currency.btc[0].sell,
  email: state.user.info && state.user.info.email,
  coins: state.wallet.coins,
});

const mapDispatchToProps = {
  selectBtc,
  selectEth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
