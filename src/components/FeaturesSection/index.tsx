import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const formData = [
  { label: "First Name", required: true },
  { label: "Last Name", required: true },
  { label: "phone", required: true },
];
export const FeaturesSection = (props: {}) => {
  return (
    <>
      <div className="container py-12 bg-white">
        <div className="mt-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-40">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              create your account
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              easy and quick signup process
            </p>
            <div className="shadow-xl px-5 py-5 bg-indigo-600 rounded-lg max-w-xl max-h-xl">
              <form>
                <section className=" flex-row px-8  py-2  ">
                  <label className="pr-14 pl-0 text-xl">First Name</label>
                  <input
                    type="text"
                    className="rounded text-xl shadow-inner  text-indigo-900"
                  />
                </section>
                <section className=" flex-row px-8  py-2  ">
                  <label className="pr-14 pl-0 text-xl">Last Name</label>
                  <input
                    type="text"
                    className="rounded text-xl shadow-inner  text-indigo-900"
                  />
                </section>
                <section className=" flex-row px-8  py-2  ">
                  <label className="pr-16 pl-0 text-xl">Password</label>
                  <input
                    type="text"
                    className="rounded  text-xl shadow-inner  text-indigo-900"
                  />
                </section>
                <section className=" flex-row px-8  py-2 pb-8 ">
                  <label className="pr-5 pl-0 text-xl ">Phone Number</label>
                  <input
                    type="text"
                    className="rounded  text-xl shadow-inner  text-indigo-900"
                  />
                </section>
              </form>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
