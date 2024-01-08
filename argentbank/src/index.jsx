import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import User from "./pages/User";
import Error404 from "./pages/404";
import Footer from "./components/Footer";

import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:userId" element={<User />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
