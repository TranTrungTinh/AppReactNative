import { ADD_PLACE, DELETE_PLACE, SELECTED_PLACE, DESELECTED_PLACE } from '../actions/actionTypes';
import placeImage from '../../assets/a.jpeg';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  if(action.type === ADD_PLACE) {
    const place = { 
      key: Math.random(), 
      name: action.payload.placeName, 
      image: placeImage 
    };
    return {
      ...state,
      places: [place, ...state.places]
    }
  }

  if(action.type === DELETE_PLACE) {
    return {
      ...state,
      places: state.places.filter(e => e.key !== state.selectedPlace.key),
      selectedPlace: null
    }
  }

  if(action.type === SELECTED_PLACE) {
    return {
      ...state,
      selectedPlace: state.places.find(e => e.key === action.payload.key)
    }
  }

  if(action.type === DESELECTED_PLACE) {
    return {
      ...state,
      selectedPlace: null
    }
  }
  return state;
}

export default reducer;