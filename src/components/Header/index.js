import { connect } from 'react-redux';
import Header from './Header';
import { selectBtc, selectEth } from "../../modules/currency";

const mapStateToProps = state => ({
  selected: state.currency.selected,
  ethPrize: state.currency.eth[0] && state.currency.eth[0].sell,
  btcPrize: state.currency.btc[0] && state.currency.btc[0].sell,
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
