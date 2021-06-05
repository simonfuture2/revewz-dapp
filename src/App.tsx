import React from "react";
import "./App.less";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <Routes />

      <div
        id="cont"
        className=" bg-gray-100  h-20 sm: sm:flex sm:justify-center lg:justify-start"
      ></div>
    </>
  );
}

export default App;
