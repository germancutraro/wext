import { createStore, combineReducers } from 'redux';

import weather from './reducers/weather';

const rootReducer = combineReducers({
    weather
})

const store = createStore(rootReducer);

export default store;