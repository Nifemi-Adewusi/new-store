import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import New from "./Ride/HomePage.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
// import Flow from "./Ride/Flow.jsx";

// const context = createContext()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <New /> */}
    {/* <Flow /> */}
  </React.StrictMode>
);
