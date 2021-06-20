import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Spinner from './Spinner';

export default function Products() {
  const [size, setSize] = useState('');
  const { category } = useParams('');
  const { data: products, error, isLoading } = useFetch(
    `products?category=${category}`,
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/details/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>
            $
            {p.price}
          </p>
        </Link>
      </div>
    );
  }

  const filterProducts = size
    ? products.filter((p) => p.skus.find((skus) => skus.size === +size))
    : products;

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <>
      <section
        id="filters"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <label htmlFor="size">Filter by Size:</label>
        {' '}
        <select id="size">
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </section>
      {size && (
      <h2>
        count:
        {filterProducts.length}
      </h2>
      )}
      <section id="products">{filterProducts.map(renderProduct)}</section>
    </>
  );
}
