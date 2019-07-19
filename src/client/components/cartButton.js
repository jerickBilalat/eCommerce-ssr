import React from 'react';
import Link from 'react-router-dom';
import {connect} from 'react-redux';

export default (cartQuantity) => {
  return (
    <div className="row">
      <nav id="navigation">
      <ul className="menu" id="responsive">
          <li className="current cart-icon">
            <Link to="/cart">
              <i className="fa fa-shopping-cart" />
              {cartQuantity}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}