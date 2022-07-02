import * as actionsType from './../actions/types.js';

const initialState = {
    show: false,
    // count: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionsType.SHOW_CART: {
            return ({ ...state, show: action.show });
        }
        default: return state;
    }
}

// export function countCartPresentation(){ // מסיון לבנות רדיוסר
// return (dispatch)=>{
//     try{

//     }
//     catch(err){
//         console.log("error from catch countCarPresentation",err);
//     }
// };

// }