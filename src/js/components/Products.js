import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/products.scss';

const Products = (props) => {
    const listItems = props.products.map((item) =>( 
        <Link key={item.id} className="card" to={"/detail/" + item.id}>
            <div className="item-img">
                <img className="img-fluid" src={item.thumbnail} alt="Card image cap"/>
            </div>
            <div className="card-body">
                <p className="card-text">{item.description}</p>
                <div className="item-price">
                     <span>{item.price} VND</span>
                </div>
            </div>
        </Link>
    ));
    return (
    <div className="d-flex align-content-start flex-wrap">
        {listItems}
    </div>
)};
export default Products;