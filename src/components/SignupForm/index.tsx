import React, { useEffect, useState } from "react";
import revewz_cycle from "./../../assets/revewz_cycle.svg";
import "./signupform.css";
import { UserAccountsDetails } from "../../models/common/common";
import { SolongWalletAdapter } from "./../../wallet-adapters/solong";
import { ModalAlert } from "../ModalAlert";
import { useHistory } from "react-router-dom";
import { PublicKey } from "@solana/web3.js";

export const SignupForm = (props: {}) => {
  const history = useHistory();
  const userVal = new UserAccountsDetails();
  userVal.firstName = " ";
  const [userData, setUserData] = useState<UserAccountsDetails>(userVal);
  const [errorList, setErrorList] = useState<any>([""]);
  const [solWallet, setSolWallet] = useState<SolongWalletAdapter>(); //could be made to add other wallets
  function updateUserfirstName(value: string) {
    setUserData({ ...userData, firstName: value });
  }
  function updateUserlastName(value: string) {
    setUserData({ ...userData, lastName: value });
  }
  function updateUserPhone(value: string) {
    const el = { ...userData };
    el.phone = value;
    setUserData(el);
  }
  function updateUserPassword(value: any) {
    setUserData({ ...userData, password: value });
  }

  function updateWalletAddress(value: any) {
    if (value.toString().length === 44) {
      const publicKey: PublicKey = new PublicKey(value);
      setUserData({ ...userData, wallet: publicKey });
    }
  }

  function signIn(e: any) {
    getProvider();
  }

  function validateUSerData(e: any) {
    debugger;
    e.preventDefault();
    if (
      userData.firstName.length <= 0 ||
      userData.lastName.length <= 0 ||
      userData.password.length <= 0 ||
      userData.phone.length <= 0 ||
      userData.wallet.length <= 0
    ) {
      setErrorList("Please fill all fields in the form");
    } else {
      handleSubmit(e);
    }
  }
  //checking wallet for phantom

  function getProvider() {
    if (userData.wallet) {
      const wallet$ = new SolongWalletAdapter();
      wallet$._publicKey = userData.wallet;
      setSolWallet(wallet$);
      console.log("walletState" + solWallet);
      console.log("walletState" + wallet$);
      wallet$.connect();
      wallet$.addListener("connect", () => {
        history.push(`/review`);
      });

      // if (walletStatus) {

      // }
    }

    // return (
    /*  <ModalAlert
          acceptbuttonLabel="Create"
          modalMessage="Youd don't seem to have a wallet.You need a walltet to receive your RVZ tokens . Create one on Phantom?"
          cancelButtonLabel="No thanks"
        ></ModalAlert>
      ); */
    // window.open("https://phantom.app/", "_blank"); //)
  }

  const handleSubmit = (e: any) => {
    getProvider();
    //create account  navigate to form page
  };

  return (
    <>
      <div className="container p-20  pt-5  content-evenly bg-white  ">
        <div className=" p-0">
          <div className="flex-col align-top place-items-stretch">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Create your account
            </h2>
            <p className="mt-2 text-3xl pb-5 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Quick and easy signup process
            </p>
            <div className="flex flex-nowrap   content-evenly justify-center flex-row ">
              <section className="shadow-xl px-5 py-5 border-b-8 border-yellow-400 bg-indigo-600 rounded-lg w-96">
                <form
                  onSubmit={(e) => {
                    validateUSerData(e);
                  }}
                >
                  <div className=" flex-row align-baseline   py-3  ">
                    <section>
                      <label className=" w-60 pr-5 ml-0 text-white pl-0 text-xl">
                        First Name
                      </label>
                      <input
                        value={userData.firstName}
                        onChange={(e) => {
                          updateUserfirstName(e.target.value);
                        }}
                        type="Text"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                  <div className=" flex-row  align-baseline   py-3  ">
                    <section>
                      <label className=" w-60 pr-5 text-white ml-0  pl-0 text-xl">
                        Last Name
                      </label>
                    </section>
                    <section>
                      <input
                        value={userData.lastName}
                        onChange={(e) => {
                          updateUserlastName(e.target.value);
                        }}
                        type="Text"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                  <div className=" flex-row align-baseline   py-3  ">
                    <section>
                      <label className=" w-60  text-white pr-5 ml-0  pl-0 text-xl">
                        Phone Number
                      </label>
                    </section>
                    <section>
                      <input
                        value={userData.phone}
                        onChange={(e) => {
                          updateUserPhone(e.target.value);
                        }}
                        type="Text"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                  <div className=" flex-row align-baseline   py-3  ">
                    <section>
                      <label className="text-white w-60 pr-5 ml-0  pl-0 text-xl">
                        Wallet
                      </label>
                    </section>
                    <section>
                      <input
                        value={userData.wallet}
                        onChange={(e) => {
                          updateWalletAddress(e.target.value);
                        }}
                        type="string"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                  <div className=" flex-row align-baseline   py-3  ">
                    <section>
                      <label className="text-white w-60 pr-5 ml-0  pl-0 text-xl">
                        Password
                      </label>
                    </section>
                    <section>
                      <input
                        value={userData.password}
                        onChange={(e) => {
                          updateUserPassword(e.target.value);
                        }}
                        type="password"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                </form>
                <div className="w-52 pb-5">
                  <button
                    onClick={(e) => {
                      validateUSerData(e);
                    }}
                    className="w-full flex items-center justify-center px-8 py-6 border border-transparent font-medium rounded-md text-indigo-700 bg-indigo-200 hover:bg-green-500 hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="w-52 ">
                  <button
                    onClick={(e) => {
                      signIn(e);
                    }}
                    className="w-full flex items-center  text-xl justify-center px-8 py-6 border border-transparent font-medium rounded-md text-white-700 bg-blue-light hover:bg-indigo-900 hover:text-white md:py-4  md:px-10"
                  >
                    Sign in
                  </button>
                </div>
              </section>
              <section className="justify-center shadow-md ml-5 bg-gray-200 rounded-3xl">
                <img
                  src={revewz_cycle}
                  className=" p-10 w-screen bg-gray-200 rounded-3xl"
                  alt=""
                ></img>{" "}
              </section>
              {errorList.length > 1 ? (
                <p className="text-red-800 ">{errorList}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
