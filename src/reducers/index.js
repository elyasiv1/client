import { combineReducers } from 'redux';
import ShopReducer from './shopReducer';

export default combineReducers({
  shop: ShopReducer
});
