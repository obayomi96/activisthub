import ActivistsService from '../../services/ActivistsService';
import {
  FETCH_ACTIVISTS,
} from "./actionTypes"

const activistsService = new ActivistsService();

export const fetchActivists = () => async (dispatch) => {
  try {
    const data = await activistsService.fetchActivists()
    if (data) {
      dispatch({
        type: FETCH_ACTIVISTS,
        payload: data
      })
    }
  } catch (error) {
    throw error
  }
}
