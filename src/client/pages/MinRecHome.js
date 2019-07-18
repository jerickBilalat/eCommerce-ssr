import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Minnesota Recreation</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  component: Home
};
