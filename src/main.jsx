import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MainProvider } from "./context/MainProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
