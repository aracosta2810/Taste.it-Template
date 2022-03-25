import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Esta linea es para hacer las pruebas, para no estar cambiando en cada uno de los casos el server
window.urlServer = 'http://10.8.91.189:8080/taste-it/public/'

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
