import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//Esta linea es para hacer las pruebas, para no estar cambiando en cada uno de los casos el server
window.urlServer = 'http://192.168.43.2:8080/taste-it/public/'

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
