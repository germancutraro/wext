import { GET_INFORMATION, SET_CITY } from '../actions/types';

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_EXTENDED":
            return {...state, ...action.payload }
        default:
            return state;
    }
};