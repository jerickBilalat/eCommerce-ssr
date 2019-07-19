import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <React.Fragment>
      <Header />
      <div className="ui container">
        <h1>Page Not Found!!!</h1>
        <p>Please try again!</p>
      </div>
    </React.Fragment>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any)
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

export default {
  component: NotFoundPage
};
