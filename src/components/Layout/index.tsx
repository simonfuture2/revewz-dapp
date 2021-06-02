import React from "react";
import "./../../App.less";
import MainHeader from "../Header";

export const AppLayout = React.memo((props: any) => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="container bg-white"></div>
    </>
  );
});
