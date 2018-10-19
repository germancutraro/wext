import { createStore, combineReducers, applyMiddleware } from 'redux';
import weather from './reducers/weather';
import unit from './reducers/unit';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weather,
    unit
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;