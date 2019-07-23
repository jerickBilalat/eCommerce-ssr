import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import Widgets from '../../components/pageSideWidgets';
import ProductList from './productList';
import { fetchProducts } from '../../actions/productActions';
import { syncCart } from '../../actions/cartActions';
import Header from '../../components/Header';

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '0',
      grid: '',
      limit: 3,
      skip: 0,
      isLoadingInitialSSRState: true,
      filters: {
        brand: [],
        frets: [],
        wood: [],
        price: []
      }
    };
  }

  componentDidMount() {
    this.props.fetchProducts(this.state.skip, this.state.limit, this.state.filters);

    this.props.syncCart();
  }

  loadMoreProducts = () => {
    const newSkip = this.state.skip + this.state.limit;
    this.props.fetchProducts(
      newSkip,
      this.state.limit,
      this.state.filters,
      this.props.products.toShop
    );

    // to do: refator to use thunks instead of promises
    this.setState({
      skip: newSkip
    });
  };

  render() {
    const { products } = this.props;
    const { limit } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="row">
          <div id="titlebar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Shop</h2>

                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Shop</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-7">
            <div className="row extra-gutter-right">
              {products.toShop.length ? (
                <ProductList
                  toShop={products.toShop}
                  toShopSize={products.toShopSize}
                  limit={limit}
                  loadMoreProducts={this.loadMoreProducts}
                />
              ) : (
                <h4>Loading Product List...</h4>
              )}
            </div>
            {products.toShopSize > 0 && products.toShopSize >= limit ? (
              <div className="row">
                <div className="col-md-12 extra-gutter-right text-center">
                  <div className="with-btn margin-bottom-20">
                    <button
                      onClick={() => this.loadMoreProducts()}
                      className="button border medium"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-md-3 col-sm-5">
            <Widgets />
            <div className="clearfix" />
            <div className="margin-bottom-40" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const loadData = async store => {
  return await store.dispatch(fetchProducts());
};

export default {
  component: connect(
    mapStateToProps,
    { fetchProducts, syncCart }
  )(ProductListPage),
  loadData
};
