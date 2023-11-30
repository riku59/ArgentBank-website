import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// REDUX
import thunk from "redux-thunk"; // gere les action asynchrone
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // il va lire par default index.js, donc pas besoin de définir le chemin complet

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true, // penser a le mettre en false pour enlever le plugin
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
