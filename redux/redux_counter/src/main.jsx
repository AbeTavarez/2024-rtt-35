import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import store from "./redux/store.js";
import { Provider } from "react-redux";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
