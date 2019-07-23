import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductDetail from './productDetail';
import Widgets from '../../components/pageSideWidgets';
import { getProductDetail, clearProductDetail } from '../../actions/productActions';
import { increaseCartItemQuantity, syncCart } from '../../actions/cartActions';
import Header from '../../components/Header';

class productDetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getProductDetail(id)).then(() => {
      if (!this.props.products.prodDetail) {
        // todo: include notification
        this.props.history.push('/');
      }
    });
    this.props.dispatch(syncCart());
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  doIncreaseCartItemQuantity = (prodDetail, differential) => {
    this.props.dispatch(increaseCartItemQuantity(prodDetail, differential));
  };

  render() {
    const { prodDetail } = this.props.products;
    return (
      <React.Fragment>
        <Header />
        {prodDetail && (
          <div className="row">
            <div id="titlebar">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 style={{ fontSize: 14 }}>{prodDetail.name}</h1>

                    <nav id="breadcrumbs">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/">Shop</Link>
                        </li>
                        <li>Product Detail</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {prodDetail ? (
            <ProductDetail
              prodDetail={prodDetail}
              increaseQuantity={this.doIncreaseCartItemQuantity}
            />
          ) : (
            <h4>Loading Product Detail...</h4>
          )}
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

const loadData = async (store, id) => {
  return await store.dispatch(getProductDetail(id));
};

export default {
  component: connect(mapStateToProps)(productDetailPage),
  loadData
};
