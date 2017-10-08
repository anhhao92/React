import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../scss/header.scss';
const Header = () => (
      <nav className="navbar navbar-expand-md navbar-dark mb-3 bd-navbar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav text-md-center nav-justified w-100">
              <li className="nav-item">
                <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/category/1">Shoes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/category/2">Smartphone</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/category/3">Camera</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/category/4">Book</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/category/5">Movies & TV</NavLink>
              </li>
            </ul>
          </div>
        </nav>
);

export default Header;