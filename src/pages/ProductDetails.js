import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>product details</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetails;
