export const SET_TOKEN = "SET_TOKEN";
//export const PUT_TOKEN = "PUT_TOKEN";

export const setToken = (token) => {
  return (dispatch) => {
    dispatch({
      type: SET_TOKEN,
      payload: { token },
    });
  };
};

/*export const putToken = (token) => {
  return (dispatch) => {
    dispatch({
      type: PUT_TOKEN,
      payload: { token },
    });
  };
};*/
