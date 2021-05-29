import React from "react";
import "./../../App.less";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import { LABELS } from "../../constants";
import { AppBar } from "../AppBar";
import MainHeader from "../Header";

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  return (
    <div className="App wormhole-bg">
      <Layout title={LABELS.APP_TITLE}>
        <Header className="App-Bar">
          <Link to="/">
            <div className="app-title">
              <h2>Revewz</h2>
            </div>
          </Link>
          <AppBar />
        </Header>
        <MainHeader></MainHeader>
        <Content style={{ padding: "0 50px" }}>{props.children}</Content>
      </Layout>
    </div>
  );
});
