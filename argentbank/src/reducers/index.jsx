import { SET_TOKEN } from "../actions/logInAction";
import { SET_USER } from "../actions/logInAction";

const initialState = { token: null, user: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload.token };
    case SET_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
}
