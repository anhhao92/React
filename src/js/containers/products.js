import React, {Component} from 'react';
import Products from '../components/Products';
import {getNewProducts} from '../actions/index'
import {connect} from 'react-redux';

class ProductsContainer extends Component {
    componentDidMount() {
        if(!this.props.products){
            this.props.dispatch(getNewProducts());
        }
    }

    render() {
        const {products} = this.props;
        let content = <div className="loader-container"><div className="loader"/></div>;
        if(products){
            content = <Products products={products}/>;
        }
        return content;
    }
}

const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}
export default connect(mapStateToProps)(ProductsContainer)
