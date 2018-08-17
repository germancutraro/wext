import { SET_CITY } from '../actions/types';

const initialState = {
    name: 'Toronto'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {...state, ...action.payload};
         default:
            return state;
    }
};