import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
const element = {
  user: {
    name: "Edison",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynRRMAATsEKRMG_3ivhR2MFP_bQx7galMQA&usqp=CAU",
  },
};
ReactDOM.render(
  <App user={element.user}/>,
  document.getElementById("root")
);