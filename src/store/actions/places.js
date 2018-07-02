import { ADD_PLACE, DELETE_PLACE, DESELECTED_PLACE, SELECTED_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    payload: { placeName }
  }
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  }
}

export const onSelectedPlace = (key) => {
  return {
    type: SELECTED_PLACE,
    payload: { key }
  }
}

export const deSelectedPlace = () => {
  return {
    type: DESELECTED_PLACE
  }
}