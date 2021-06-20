/* eslint-disable func-names */
import { ADD_TO_CART } from '../actionTypes';

const initialState = {
  items: {

  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId, quantity } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: {
            quantity,
          },
        },
      };
    }
    default:
      return state;
  }
}
