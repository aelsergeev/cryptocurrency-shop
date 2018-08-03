import { connect } from 'react-redux';
import Graph from './Graph';
import { selectOffset } from "../../modules/currency/actions";

const mapStateToProps = state => ({
  currency: state.currency,
});

const mapDispatchToProps = {
  selectOffset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);
