import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // il va lire par default index.js, donc pas besoin de définir le chemin complet
// import { addPosts } from "./actions/post.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // penser a le mettre en false pour enlever le plugin
});

// store.dispatch(addPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
