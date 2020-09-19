import {
  FETCH_ACTIVISTS
} from '../actions/actionTypes'

export const initialState = {
  activists: [],
  singleActivist: {},
}

export const activistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVISTS:
      return {
        ...state,
        activists: action.payload,
      }
    default:
      return state
  }
}