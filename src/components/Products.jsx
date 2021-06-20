/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShopIcon from '@material-ui/icons/Shop';
import { connect } from 'react-redux';
import useFetch from '../services/useFetch';
import Spinner from './Spinner';

import { addToCart } from '../redux/cartAction';
import { nullLiteral } from '@babel/types';

const useStyles = makeStyles(() => ({
  button: {
    minWidth: '155px',
    minHeight: '30px',
  },
}));

export function Products({ addToCart }) {
  const classes = useStyles();

  const [size, setSize] = useState('');
  const { category } = useParams('');
  const {
    data: products,
    error,
    isLoading,
  } = useFetch(`products?category=${category}`);

  function renderProduct(p) {
    return (
      <Grid key={p.id} className="product" item xs={4}>
        <Link to={`/details/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>
            $
            {p.price}
          </p>
        </Link>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => addToCart(p.id)}
          className={classes.button}
          startIcon={<ShoppingCartIcon />}
        >
          Add To Cart
        </Button>
      </Grid>
    );
  }

  const filterProducts = size
    ? products.filter((p) => p.skus.find((skus) => skus.size === +size))
    : products;

  if (error) throw error;

  if (isLoading) return <Spinner />;

  // const numberOfRows = Math.ceil(filterProducts.length / 3);

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
      <section id="products">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <>{filterProducts.slice(0, 3).map(renderProduct)}</>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <>{filterProducts.slice(3, 6).map(renderProduct)}</>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <>{filterProducts.slice(6, 9).map(renderProduct)}</>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default connect(null, { addToCart })(
  Products,
);
