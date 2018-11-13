import { createStore, combineReducers, applyMiddleware } from 'redux';
import weather from './reducers/weather';
import unit from './reducers/unit';
import thunk from 'redux-thunk';
import extended from './reducers/extended'

const rootReducer = combineReducers({
    weather,
    extended,
    unit
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;