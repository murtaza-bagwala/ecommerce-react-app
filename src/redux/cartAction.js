/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART } from './actionTypes';

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: {
    productId,
    quantity: 1,
  },
});
