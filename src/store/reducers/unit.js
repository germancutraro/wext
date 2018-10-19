import { SET_UNIT } from "../actions/types";

const initialState ="metric";

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIT:
            return action.payload
        default:
            return state;    
    }
};