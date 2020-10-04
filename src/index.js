import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./templates/main";
import { BrowserRouter } from "react-router-dom";
import routes from "./pages/index";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Main>{routes}</Main>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
