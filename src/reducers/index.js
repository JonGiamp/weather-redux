import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// Combine all reducers
const rootReducer = combineReducers({
  weather:  WeatherReducer
});

export default rootReducer;
