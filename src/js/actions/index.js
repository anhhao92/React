import service from '../api/service'

export const receiveProductsByCategory = (products) => {
    return {
        type: 'RECEIVED_PRODUCTS_BY_CATEGORY',
        productsCategory: products
    }
};

export const receiveProducts = products => ({
  type: 'RECEIVED_PRODUCTS',
  products: products
});

export const receiveProductDetail = detail => ({
  type: 'RECEIVED_PRODUCT_DETAIL',
  productDetail: detail
});

export const getNewProducts = () => (dispatch) => {
    dispatch({type: 'FETCHING'});
    service.getNewProducts(products => {
      dispatch(receiveProducts(products));
    });
};

export const getProductById = (id) => (dispatch) => {
    dispatch({type: 'FETCHING'})
    service.getProductById(id, product => {
      dispatch(receiveProductDetail(product));
    });
};

export const getProductsByCategoryId = (id) => (dispatch) => {
    dispatch({type: 'FETCHING'})
    service.getProductsByCategoryId(id, products => {
      dispatch(receiveProductsByCategory(products));
    });
};