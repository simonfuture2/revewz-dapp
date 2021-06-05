import React, { useEffect, useState } from "react";
import revewz_cycle from "./../../assets/revewz_cycle.svg";
import "./signupform.css";
import { UserAccountsDetails } from "../../models/common/common";

export const SignupForm = (props: {}) => {
  const userVal = new UserAccountsDetails();
  userVal.firstName = " ";
  const [userData, setUserData] = useState<UserAccountsDetails>(userVal);

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
  function updateUserPassword(value: string) {
    setUserData({ ...userData, password: value });
  }

  const handleSubmit = () => {};
  return (
    <>
      <div className="container p-20  pt-5  content-evenly bg-white  ">
        <div className=" p-0">
          <div className="flex-col align-top place-items-stretch">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              create your account
            </h2>
            <p className="mt-2 text-3xl pb-5 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              easy and quick signup process
            </p>
            <div className="flex flex-nowrap   content-evenly justify-center flex-row ">
              <section className="shadow-xl px-5 py-5 border-b-8 border-yellow-400 bg-indigo-600 rounded-lg w-96">
                <form onSubmit={handleSubmit}>
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
                        Password
                      </label>
                    </section>
                    <section>
                      <input
                        value={userData.password}
                        onChange={(e) => {
                          updateUserPassword(e.target.value);
                        }}
                        type="Password"
                        className="w-60 formHeight rounded text-xl shadow-inner  text-indigo-900"
                      />
                    </section>
                  </div>
                </form>
                <div className="w-52">
                  <button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Sign Up
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
