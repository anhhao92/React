import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/detail.scss';

const ProductDetail = (props) => {
    const item = props.product
    return (
    <div className="container-fluid">
        <div className="row">
               <div className="col-12 col-md-4">
                   <div className="thumbnail">
                        <img className="img-fluid" src={item.thumbnail} />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>{item.description}</h3>    
                    <h5 className="brand">Brand <span className="text-primary">{item.brand}</span> · <small >({item.totalReview} customer reviews)</small></h5>
                    <h4><span className="text-success">In Stock</span></h4>
                    <h3 className="price">{item.price} VND</h3>
                    <div className="form-group form-inline">
                        <h5>Quantity:</h5>
                       <select className="custom-select mx-sm-3">
                            <option defaultValue>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>      
                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </div>                                  
                </div> 
        </div>
    </div>
)};
export default ProductDetail;