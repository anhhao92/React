export default (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVED_PRODUCT_DETAIL':
            return action.productDetail;
    }
    return state;
}
