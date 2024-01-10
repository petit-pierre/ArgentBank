export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";

export const setToken = (token) => {
  return (dispatch) => {
    dispatch({
      type: SET_TOKEN,
      payload: { token },
    });
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: { user },
    });
  };
};
