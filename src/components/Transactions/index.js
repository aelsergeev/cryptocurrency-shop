import { connect } from 'react-redux';
import Transactions from './Transactions';
import { getSelectedCurrency } from '../../modules/currency/selector';

const mapStateToProps = state => ({
  transactions: state.transactions,
  selected: getSelectedCurrency(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
