import React from 'react';
// import axios from 'axios'; 

import * as actionsType from './types';

 export  const setShowCart = (show) => async dispatch => {
    dispatch({ type: actionsType.SHOW_CART, show: show });
}
// export const setNumCartItem = (show) => async dispatch => {
//     dispatch({ type: actionsType.SHOW_NUM_ITEM_IN_CART, show: show });
// }