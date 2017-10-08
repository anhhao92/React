import {combineReducers} from 'redux';
import ProductsCategoryReducer from './reducer-products-category';
import ProductDetailReducer from './reducer-product-detail';
import ProductsReducer, {appReducer} from './reducer-products';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    productsCategory: ProductsCategoryReducer,
    productDetail: ProductDetailReducer,
    products: ProductsReducer,
    isLoading: appReducer
});

export default allReducers
