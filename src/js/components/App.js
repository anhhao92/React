import React from 'react';
import Header from './Header';
import Home from './Home'
import ProductCategory from '../containers/product-category';//'./Category';
import ProductDetail from '../containers/product-detail';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap';
import '../../scss/style.scss';

const App = () =>  (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:id' component={ProductCategory}/>
            <Route path='/detail/:id' component={ProductDetail}/>
        </Switch>
    </div>
);

export default App;
