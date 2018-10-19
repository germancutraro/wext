import { GET_INFORMATION, SET_CITY } from './types';
import axios from 'axios';

const API_KEY = '7c02b1090f42b77e30cac4cd89ffea05';

export const getInformation = (mode, geoData, city = 'New York', units) => async dispatch => {
        return new Promise(async (resolve, reject) => {
            let API;
            if (mode === "gps")
                API = `api.openweathermap.org/data/2.5/weather?lat=${geoData.latitude}&lon=${geoData.longitude}&appid=${API_KEY}&units=${units}&lang=es`;
            else
                API = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=es`;

            try {
                const res = await axios("https://" + API);
                //console.log(res.data);
                dispatch({
                    type: GET_INFORMATION,
                    payload: res.data
                });
                resolve();
            } catch (err) {
                dispatch({
                    type: 'ERROR_CITY',
                    payload: { message: 'error xd xd xd' }
                })
                reject(err.message);
            }
        });
};

export const setCityAction = cityName => ({
    type: SET_CITY,
    payload: cityName
});

export const setCity = cityName => dispatch => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validate!
            dispatch(setCityAction(cityName));
            resolve();
        }, 400)

    })
};
