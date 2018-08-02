import { connect } from 'react-redux';
import Transactions from './Transactions';

const mapStateToProps = state => ({
  transactions: state.transactions,
  selected: state.currency.selected
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
