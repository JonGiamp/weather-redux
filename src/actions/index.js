import axios from 'axios';

const API_KEY = 'a8d82f694b5c2fe700f262e99a6dad97';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);

  // Action
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
