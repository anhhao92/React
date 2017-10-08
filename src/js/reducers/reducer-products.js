export default (state = null, action) => {
  switch (action.type) {
    case 'RECEIVED_PRODUCTS':
      return action.products;
    default:
      return state;
  }
}

export const appReducer = (state = true, action) => {
  switch (action.type) {
    case 'FETCHING':
        return true;
    case 'RECEIVED_PRODUCTS':
    case 'RECEIVED_PRODUCT_DETAIL':
    case 'RECEIVED_PRODUCTS_BY_CATEGORY':
        return false;
    default:
        return state;
  }
}