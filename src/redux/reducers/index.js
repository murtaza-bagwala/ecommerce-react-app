import { combineReducers } from 'redux';
import productReducer from './product';
import cart from './cart';

export default combineReducers({ cart });
