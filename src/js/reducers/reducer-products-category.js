export default (state = null, action = {}) => {
  switch (action.type) {
    case 'RECEIVED_PRODUCTS_BY_CATEGORY':
        return action.productsCategory;
    default:
        return state;
  }
}