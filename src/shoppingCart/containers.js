import { connect } from 'react-redux';
import { update, remove, updateModal } from './actions';
import Cart from './components/Cart';

export const ShoppingCart = connect(
  function mapStateToProps(state) {
    return { cart: state.cart, modal: state.modal };
  },
  function mapDispatchToProps(dispatch) {
    return {
      update: text => dispatch(update(text)),
      remove: id => dispatch(remove(id)),
      updateModal: text => dispatch(updateModal(text)),
    };
  }
)(Cart);

