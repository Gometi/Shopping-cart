import { connect } from 'react-redux';
import { update, remove } from './actions';
import Cart from './components/Cart';

export const ShoppingCart = connect(
  function mapStateToProps(state) {
    return { cart: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      update: text => dispatch(update(text)),
      remove: id => dispatch(remove(id))
    };
  }
)(Cart);

