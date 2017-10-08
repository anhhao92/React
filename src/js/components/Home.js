import React from 'react';
import ProductsContainer from '../containers/products';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <h3>New Products</h3>
        <ProductsContainer />
    </div>
);

export default Home;