import { connect } from 'react-redux';
import Header from './Header';
import { selectBtc, selectEth } from "../../modules/currency/actions";
import { getBtcPrice, getEthPrice } from "../../modules/currency/selector";
import { getEmail } from "../../modules/user/selector";
import { getCoins } from "../../modules/wallet/selector";

const mapStateToProps = state => ({
  ethPrice: getEthPrice(state),
  btcPrice: getBtcPrice(state),
  email: getEmail(state),
  coins: getCoins(state),
});

const mapDispatchToProps = {
  selectBtc,
  selectEth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
