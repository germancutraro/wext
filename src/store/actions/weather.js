import { GET_INFORMATION, SET_CITY } from './types';
import axios from 'axios';

const API_KEY = '7c02b1090f42b77e30cac4cd89ffea05';

export const getInformation = (city = 'New York') => async dispatch => {
    const API = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const res = await axios("https://" + API);
      //console.log(res.data);
      dispatch({ 
        type: GET_INFORMATION,
        payload: res.data
     });
    } catch (err) {
        console.log(err.message)
    }
};

export const setCity = cityName => ({
    type: SET_CITY,
    payload: cityName
});
