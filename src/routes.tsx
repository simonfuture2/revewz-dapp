import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { WalletProvider } from "./contexts/wallet";
import { ConnectionProvider } from "./contexts/connection";
import { AccountsProvider } from "./contexts/accounts";
import { MarketProvider } from "./contexts/market";
import { AppLayout } from "./components/Layout";

import { FaucetView, HomeView } from "./views";
import { ReviewSearchBox } from "./components/ReviewSearchbox";
import { SignupForm } from "./components/SignupForm";
import MainHeader from "./components/Header";

export function Routes() {
  return (
    <>
      <HashRouter basename="/">
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <MainHeader></MainHeader>
                <Switch>
                  <Route exact path="/" component={() => <HomeView />} />
                  <Route
                    exact
                    path="/search"
                    component={() => <ReviewSearchBox />}
                  />
                  <Route
                    exact
                    path="/signup"
                    component={() => <SignupForm />}
                  />
                  <Route exact path="/faucet" children={<FaucetView />} />
                </Switch>
              </MarketProvider>
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}
