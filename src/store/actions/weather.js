import { SET_CITY } from './types';

export const setCity = cityName => ({
    type: SET_CITY,
    payload: cityName
});
