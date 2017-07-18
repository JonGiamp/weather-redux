import { FETCH_WEATHER } from '../actions/index';

// Reducer
export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
    break;
  }
  return state;
}
