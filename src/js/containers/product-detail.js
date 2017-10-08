import React, {Component} from 'react';
import Product from '../components/ProductDetail';
import {getProductById} from '../actions/index'
import {connect} from 'react-redux';

 class ProductDetailContainer extends Component {

    componentWillMount() {
        if(this.props.id){
            this.props.dispatch(getProductById(this.props.id));
        }
    }

    render(){
        const {isLoading, productDetail} = this.props;
        let content = <div className="loader-container"><div className="loader"/></div>;
        if(!isLoading)
            content = <Product product={productDetail}/>;
        return content;
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      productDetail: state.productDetail,
      isLoading: state.isLoading,
      id: ownProps.match.params.id
  }
}

export default connect(mapStateToProps)(ProductDetailContainer)
