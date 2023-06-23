import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./Context/ProductContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <MyApp />
      </ProductContextProvider>
      {/* <App /> */}
    </AuthContextProvider>
  </BrowserRouter>
);
