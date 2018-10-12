import { createStore, combineReducers, applyMiddleware } from 'redux';
import weather from './reducers/weather';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weather
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;