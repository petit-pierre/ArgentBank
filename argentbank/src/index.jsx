import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/userSlice";
import { thunk } from "redux-thunk";

import "./main.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="root">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
