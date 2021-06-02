import React, { useState } from "react";

export const ReviewSearchBox = () => {
  let [searchTerm, setSearchTerm] = useState(null);
  return (
    <>
      <div className="container w-screen  bg-white flex-row  align-middle items-center m-auto">
        <div className=" flex flex-row justify-evenly content-evenly">
          <p className="mt-10 -mb-40 text-indigo-900 text-6xl">Revewz</p>
        </div>

        <form className=" flex flex-row justify-evenly content-evenly">
          <input
            type="text"
            placeholder="Search for products"
            className="m-32 text-xl pr-5 pl-5 drop-shadow-2xl border-indigo-900 border-4 border-solid shadow-inner rounded-3xl w-8/12 h-20 text-indigo-900"
          />
        </form>
      </div>
      <div className="  bg-white flex flex-row justify-evenly content-evenly">
        <button className="btn btn--secondary p-1 m-5 rounded-xl w-3/12 h-12 bg-green-500 hover:bg-green-700 text-xl ">
          Add Review
        </button>
        <button className="btn btn--primary p-1 m-5 w-3/12 rounded-xl h-12 text-xl  bg-indigo-500 hover:bg-purple-800">
          Staking
        </button>
        <button className="btn btn--primary p-1 m-5 w-3/12 rounded-xl h-12 text-xl  bg-indigo-500 hover:bg-purple-800">
          Wallet
        </button>
      </div>
    </>
  );
};
