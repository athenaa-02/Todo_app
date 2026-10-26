import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { store } from "./components/store.js";

const root = createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    </BrowserRouter>
  </Provider>
);
