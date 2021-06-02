import React from "react";
import "./../../App.less";

import { Link } from "react-router-dom";

import { LABELS } from "../../constants";
import { AppBar } from "../AppBar";
import MainHeader from "../Header";

export const AppLayout = React.memo((props: any) => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="container bg-white"></div>
    </>
  );
});
