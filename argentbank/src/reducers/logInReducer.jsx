const initialState = { token: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
