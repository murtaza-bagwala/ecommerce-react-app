import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../services/useFetch';
import Spinner from './Spinner';

export default function Details() {
  const { id } = useParams('');
  const { data: product, error, isLoading } = useFetch(`products/${id}`);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">
        $
        {product.price}
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
