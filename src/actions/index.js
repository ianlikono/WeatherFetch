import axios from 'axios';

const API_KEY = '11a2f06828625b07a1c4185a876efca4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},254`;
  const request = axios.get(url);



  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
