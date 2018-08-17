import { SET_CITY } from '../actions/types';

const initialState = {
    name: 'Toronto'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            console.log('working', action.payload);
            return [...state, ...action.payload]
         default:
            return state;
    }
};