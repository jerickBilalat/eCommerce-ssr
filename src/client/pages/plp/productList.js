import React from 'react';
import ProductCard from '../../components/productCard';

const ProductList = ({toShop, loadMoreProducts}) => {

  const renderCards = () => (
    toShop ? 
    toShop.map( item => (
        <ProductCard key={`${item._id}${Math.random()}`} productItem={{...item}} loadMoreProducts={loadMoreProducts} />
      ))
    : null
  )


  return (
    <React.Fragment>
      {renderCards()}
    </React.Fragment>
  );
};

export default ProductList;