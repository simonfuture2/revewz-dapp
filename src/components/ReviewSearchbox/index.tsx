import React, { useState } from "react";

export const ReviewSearchBox = () => {
  //  #ffc93c #07689f #40a8c4 #a2d5f2

  let [searchTerm, setSearchTerm] = useState(null);
  return (
    <>
      <div className="container">
        <div className="container max-h-screen max-w-screen bg-white flex-row  align-middle items-center m-auto">
          <div className=" flex flex-row justify-evenly content-evenly">
            <p className="mt-10 -mb-40 text-indigo-900 text-6xl">Revewz</p>
          </div>

          <form className=" flex flex-row justify-evenly content-evenly">
            <input
              type="text"
              placeholder="Search for products"
              className="m-32 text-xl pr-5 pl-5  border-indigo-900 border-4 border-solid shadow-inner rounded-3xl w-8/12 h-20 text-indigo-900"
            />
          </form>
        </div>
        <div className="  bg-white  pb-11   flex flex-row justify-evenly content-evenly">
          <section className=" rounded-3xl items-center justify-center shadow-md border-t-2 border-blue-500 p-5 w-3/12 h-80 bg-gradient-to-br from-yellow-light to-yellow-300 ">
            <button className="  w-80 h-1/6 flex items-center justify-center rounded-md bg-black hover:bg-blue-default  text-white">
              Add Review &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </button>
          </section>
          <section className=" rounded-3xl content-evenly justify-evenly shadow-md border-t-2 border-blue-default p-5 w-3/12 h-80 bg-gradient-to-br from-blue-secondary to-blue-default ">
            <button className="w-80  h-1/6 flex items-center justify-center rounded-md text-white  bg-black hover:bg-blue-light">
              Staking &nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
