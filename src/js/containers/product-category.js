import React, {Component} from 'react';
import Products from '../components/Products';
import {getProductsByCategoryId} from '../actions/index'
import {connect} from 'react-redux';

 class ProductCategoryContainer extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.props.id != nextProps.id){
            this.props.dispatch(getProductsByCategoryId(nextProps.id));
        }
    }

    componentWillMount() {
        if(this.props.id){
            this.props.dispatch(getProductsByCategoryId(this.props.id));
        }
    }

    render(){
        const {isLoading, productsCategory} = this.props;
        let content = (
        <div className="loader-container">
            <div className="loader"/>
        </div>
        );
        if(!isLoading && productsCategory){
            if(productsCategory.length == 0){
                content = (
                    <div className="container">
                        <h3>There's no products in this category</h3>
                    </div>);
            } else {
                const categoryName = productsCategory[0].categoryName;
                content = (
                    <div className="container">
                        <h3>Products in {categoryName}</h3>
                        <Products products={productsCategory}/>
                    </div>);
            }

        }
        return content;
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      productsCategory: state.productsCategory,
      isLoading: state.isLoading,
      id: ownProps.match.params.id
  }
}

export default connect(mapStateToProps)(ProductCategoryContainer)
