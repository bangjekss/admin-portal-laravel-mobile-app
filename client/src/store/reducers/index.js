import {combineReducers} from 'redux';
import productReducer from './productReducer';
import saleReducer from './saleReducer';
import customerReducer from './customerReducer';

export default combineReducers({
  productReducer,
  saleReducer,
  customerReducer,
});
