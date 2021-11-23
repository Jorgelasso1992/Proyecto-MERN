import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./views/Login";
import { SignUp } from "./views/SignUp";
const element = {
  user: {
    name: "Edison",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynRRMAATsEKRMG_3ivhR2MFP_bQx7galMQA&usqp=CAU",
  },
};
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  //<SignUp/>,
  //<Login/>,
  document.getElementById("root")
);
