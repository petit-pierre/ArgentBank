export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SET_EMAIL = "SET_EMAIL";
export const SET_ID = "SET_ID";

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

export const setEmail = (email) => {
  return (dispatch) => {
    dispatch({
      type: SET_EMAIL,
      payload: { email },
    });
  };
};

export const setId = (id) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: { id },
    });
  };
};
