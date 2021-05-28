import React, { useState } from "react";

export const ReviewSearchBox = () => {
  let [searchTerm, setSearchTerm] = useState(null);
  return (
    <>
      <div className="container  bg-white">
        <div className=" row-span-6 mt-40 content-center shadow-sm flex-row px-8  py-2 pb-8 ">
          <form>
            <input
              type="text"
              placeholder="Search for products"
              className="rounded  text-xl shadow-inner min-w-full text-indigo-900"
            />
          </form>
        </div>

        <button className="btn btn--secondary">Decline</button>
        <button className="btn btn--primary">Accept</button>
      </div>
    </>
  );
};
