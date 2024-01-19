import { userSlice } from "../Slices/userSlice";
import { setStorage } from "../utils/localStorage";

export const setTokenThunk =
  (email, password, rememberChecked) => async (dispatch, getState) => {
    const response = await fetch("http://localhost:3001/api/V1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const result = await response.json();
      /*const test = {
        then: function (resolve, reject) {
          resolve(result.body.token);
        },
      };
      console.log(await test);*/
      dispatch(userSlice.actions.setToken(result.body.token));
      if (rememberChecked === true) {
        setStorage(result.body.token);
      }
      return result.body.token;
    }
    return false;
  };

export const setProfilThunk = (token) => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3001/api/V1/user/profile", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (response.ok) {
    const result = await response.json();
    dispatch(userSlice.actions.setUser(result.body.userName));
    dispatch(userSlice.actions.setId(result.body.id));
    dispatch(userSlice.actions.setEmail(result.body.email));
    dispatch(userSlice.actions.setFirstName(result.body.firstName));
    dispatch(userSlice.actions.setLastName(result.body.lastName));
    return result.body.id;
  }
  return false;
};
