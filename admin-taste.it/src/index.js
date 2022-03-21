import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//Esta linea es para hacer las pruebas, para no estar cambiando en cada uno de los casos el server
window.urlServer = 'exampleserver.com'

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
