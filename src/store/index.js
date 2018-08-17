import { createStore, combineReducers } from 'redux';

import weatherReducer from './reducers/weather';

const rootReducer = combineReducers({
    weather: weatherReducer
})

const store = createStore(rootReducer);

export default store;