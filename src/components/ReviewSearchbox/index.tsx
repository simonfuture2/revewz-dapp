import React, { useState, useRef } from "react";
import AddReveiw from "../AddReview";

export const ReviewSearchBox = () => {
  //  #ffc93c #07689f #40a8c4 #a2d5f2
  const reviewform = useRef<any>();
  const [searchTerm, setSearchTerm] = useState(null);
  const [show, setShowCard] = useState<boolean>(false);

  const toggleCard = () => {
    setShowCard(!show);
    hideForm(show);
  };

  function hideForm(value: boolean) {
    if (value) {
      reviewform.current.visible = value;
    }
  }

  return (
    <>
      <div className="container">
        <div className=" flex mt-10  mb-5 flex-row justify-evenly content-evenly">
          <p className=" text-indigo-900 text-3xl">Revewz</p>
        </div>
        <div className="container max-h-screen max-w-screen bg-white flex-nowrap flex-row  align-middle items-center m-auto">
          <div>
            <form className=" mb-20 flex flex-row items-center justify-center">
              <button className="m-0 w-30 h-30 content-center align-middle p-5">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Search for products"
                className="   text-xl pr-1 pl-5 focus:border-light-blue-500 focus:border-5 focus:ring-1 focus:ring-indigo-900 focus:outline-none  border-2 border-solid  rounded-3xl w-8/12 h-20 text-indigo-900"
              />
            </form>
          </div>
        </div>
        <div className="  bg-white  pb-11   flex flex-row justify-evenly content-evenly">
          <section className=" rounded-3xl items-center justify-center shadow-md border-t-2 border-blue-500 p-5 w-3/12 h-80 bg-gradient-to-br from-yellow-light to-yellow-300 ">
            <button
              onClick={toggleCard}
              className="  w-80 h-1/6 flex items-center justify-center rounded-md bg-black hover:bg-blue-default  text-white"
            >
              Add Review &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </button>
          </section>
          <section className=" rounded-3xl content-evenly justify-evenly shadow-md border-t-2 border-blue-default p-5 w-3/12 h-80 bg-gradient-to-br from-blue-secondary to-blue-default ">
            <button className="w-80  h-1/6 flex items-center justify-center rounded-md text-white  bg-black hover:bg-blue-default">
              Staking &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </button>
          </section>
          <section className=" rounded-3xl content-evenly justify-evenly shadow-md border-t-2 border-blue-default p-5 w-3/12 h-80 bg-gradient-to-br from-indigo-900 to-blue-600">
            <button className="w-80  h-1/6 flex items-center justify-center rounded-md text-xl text-white bg-black hover:bg-blue-default">
              Wallet&nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </section>
        </div>
        <div ref={reviewform} className="">
          <AddReveiw></AddReveiw>
        </div>
      </div>
    </>
  );
};
