import { GET_INFORMATION, SET_CITY } from '../actions/types';

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INFORMATION:
            return {...state, ...action.payload }
        case SET_CITY:
            return {...state, ...action.payload};
        case 'ERROR_CITY':
            return {...state, ...action.payload }  
        case 'DELETE_WEATHER':
            return {}    
         default:
            return state;
    }
};