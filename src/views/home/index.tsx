import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import customer from "./../../assets/customer.jpg";
import { TokenIcon } from "../../components/TokenIcon";
import { useConnectionConfig } from "../../contexts/connection";
import { useMarkets } from "../../contexts/market";
import { useUserBalance, useUserTotalBalance } from "../../hooks";
import { WRAPPED_SOL_MINT } from "../../utils/ids";
import { formatUSD } from "../../utils/utils";
import "./home.css";
import { useHistory } from "react-router-dom";
export const HomeView = () => {
  const { marketEmitter, midPriceInUSD } = useMarkets();
  const { tokenMap } = useConnectionConfig();
  const SRM_ADDRESS = "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt";
  const SRM = useUserBalance(SRM_ADDRESS);
  const SOL = useUserBalance(WRAPPED_SOL_MINT);
  const { balanceInUSD: totalBalanceInUSD } = useUserTotalBalance();

  const history = useHistory();
  useEffect(() => {
    const refreshTotal = () => {};

    const dispose = marketEmitter.onMarket(() => {
      refreshTotal();
    });

    refreshTotal();

    return () => {
      dispose();
    };
  }, [marketEmitter, midPriceInUSD, tokenMap]);
  function navigateToPath(e: any, path: any) {
    e.preventDefault();
    history.push(path);
  }

  return (
    <>
      <div className="relative bg-white overflow-hidden ">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-3 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="flex flex-row flex-nowrap">
            <section>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Revewz</span>{" "}
                <br></br>
              </h1>
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Reviews by the consumer &amp; for the consumer
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                RevewZ offers a decentralized review system hosted on the Solana
                blockchain that uses both SLP tokens and NTFs to authenticate
                and validate product purchases and reviews made by consumers.
              </p>
            </section>

            <section className="max-w-screen-md w-8/12  h-4/6">
              <img
                src={customer}
                className="md:48 rounded-t-lg rounded-b-2xl shadow-md transform  hover:-translate-y-1 hover:scale-110"
                alt="revewz cycke "
              ></img>
            </section>
          </div>
        </main>
      </div>
      <div className="mt-5 bg-gray-100  p-20 h-32 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md  content-evenly content-center ">
          <a
            href="/search"
            onClick={(e) => {
              navigateToPath(e, `/search`);
            }}
            className="w-full shadow-md flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            onClick={(e) => {
              navigateToPath(e, `/signup`);
            }}
            href="/signup/"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 shadow-md bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
    /* 
    <Row gutter={[16, 16]} align="middle">
      <Col span={24}>
        <h2>Your balances ({formatUSD.format(totalBalanceInUSD)}):</h2>
        <h2>SOL: {SOL.balance} ({formatUSD.format(SOL.balanceInUSD)})</h2>
        <h2 style={{ display: 'inline-flex', alignItems: 'center' }}>
          <TokenIcon mintAddress={SRM_ADDRESS} /> SRM: {SRM?.balance} ({formatUSD.format(SRM?.balanceInUSD)})
        </h2>
      </Col>

      <Col span={12}>
        <ConnectButton />
      </Col>
      <Col span={12}>
        <Link to="/faucet">
          <Button>Faucet</Button>
        </Link>
      </Col>
      <Col span={24}>
        <div className="builton" />
      </Col>
    </Row> */
  );
};
