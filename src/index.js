import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-photo-view/dist/react-photo-view.css";
import AuthContext from "./Contexts/AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <App />
  </AuthContext>
);

reportWebVitals();
