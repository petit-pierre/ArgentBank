import { SET_TOKEN } from "../actions/logInAction";
import { SET_USER } from "../actions/logInAction";
import { SET_EMAIL } from "../actions/logInAction";
import { SET_ID } from "../actions/logInAction";

const initialState = { token: null, user: null, email: null, id: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload.token };
    case SET_USER:
      return { ...state, user: action.payload.user };
    case SET_EMAIL:
      return { ...state, email: action.payload.email };
    case SET_ID:
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
}
