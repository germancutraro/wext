import { GET_INFORMATION, SET_CITY } from './types';
import axios from 'axios';

const API_KEY = '7c02b1090f42b77e30cac4cd89ffea05';

export const getInformation = (mode, geoData, city, units) => async dispatch => {
        return new Promise(async (resolve, reject) => {

            let API;
            if (mode === "gps")
                API = `api.openweathermap.org/data/2.5/weather?lat=${geoData.latitude}&lon=${geoData.longitude}&appid=${API_KEY}&units=${units}&lang=es`;
            else if (mode === "manual")
                API = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=es`;
           else
                 API = `api.openweathermap.org/data/2.5/forecast?q=Hurlingham&appid=${API_KEY}&units=${units}&lang=es`;     
            try {
                const res = await axios("https://" + API);
                if (mode !== "extended")  {
                    dispatch({
                        type: GET_INFORMATION,
                        payload: res.data
                    });
                    resolve(res)
                } else {
                    dispatch({
                        type: "GET_EXTENDED",
                        payload: res.data.list
                    });
                }
                resolve();
            } catch (err) {
                dispatch({
                    type: 'ERROR_CITY',
                    payload: { message: err.message }
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
        
            // Validate!
            dispatch(setCityAction(cityName));
            resolve();
        

    })
};

export const emptyWeather = () => {
    return {
        type: 'DELETE_WEATHER'
    }
}