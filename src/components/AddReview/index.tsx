import { useState, useEffect } from "react";
import React from "react";
import { ReviewData } from "../../models/common";
import OnlineReview from "./../../assets/OnlineReview.gif";
import IPFS from "ipfs-core";
import CID from "cids";
import { sendTransaction, useConnection } from "../../contexts/connection";
import { useWallet } from "../../contexts/wallet";
import {
  Account,
  AccountMeta,
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
  TransactionInstructionCtorFields,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";

export default function AddReveiw() {
  const initData = new ReviewData();
  const [reviewData, setReviewData] = useState<ReviewData>(initData);
  const [errorlist, setErrorlist] = useState<string[]>([""]);
  const [IPFS_node, setIpfsNode] = useState<any>();
  const connection = new Connection(
    "https://devnet.solana.com/",
    "singleGossip"
  );
  const { publicKey, wallet, select } = useWallet();

  const REVEWZ_MINT_VAULT_KEY = new PublicKey(
    `4bFqRBD6RfZSKGgE5m4GtPk9341q4Bj6gVmvkDrgkX9Q`
  );
  const TEST_CLIETN_aCCOOUNT = new PublicKey(
    `ET2jBwgfh8dW6cizLp8P4VAhLfgnZxFNkQU4EBP1bePH`
  );
  let secret = Buffer.from("password");
  const MULTISIGNERS = [new Account()];
  //let REVEWZ_PAYER = Keypair.fromSecretKey(secret)
  const REVEWZ_PAYER = new Account();
  const SPL_TOKEN_ENGINE: Token = new Token(
    connection,
    REVEWZ_MINT_VAULT_KEY,
    TOKEN_PROGRAM_ID,
    REVEWZ_PAYER
  );

  async function sendReward() {
    try {
      const response = await SPL_TOKEN_ENGINE.transfer(
        REVEWZ_MINT_VAULT_KEY,
        TEST_CLIETN_aCCOOUNT,
        REVEWZ_MINT_VAULT_KEY,
        MULTISIGNERS,
        11
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const loadFile = (e: any) => {
    const medialist = reviewData.product_media_list;
    medialist.push(e.target.files);
    setReviewData({ ...reviewData, product_media_list: [...e.target.files] });
  };

  function renderListofFiles() {
    let selectedfiles: any = [];
    if (
      reviewData.product_media_list &&
      reviewData.product_media_list.length > 0
    ) {
      selectedfiles = reviewData.product_media_list.map((filename: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return <p>{filename.name}</p>;
      });
    }
    return [...selectedfiles];
  }

  //validate form entry
  function validate() {
    let tempErrorList = errorlist;
    if (
      reviewData.product_barcode === null ||
      reviewData.product_barcode === undefined ||
      reviewData.product_barcode === ""
    ) {
      tempErrorList.push("Barcode is required, please scan barcode");
      setErrorlist(tempErrorList);
    }
    if (
      reviewData.product_media_list === null ||
      reviewData.product_media_list === undefined ||
      reviewData.product_media_list.length < 1
    ) {
      tempErrorList = errorlist;
      tempErrorList.push("Submit a picture or video of the product");
      setErrorlist(tempErrorList);
    }
    if (
      reviewData.product_name == null ||
      reviewData.product_name === undefined ||
      reviewData.product_name === ""
    ) {
      tempErrorList = errorlist;
      tempErrorList.push("add name of product");
      setErrorlist(tempErrorList);
    }
    if (
      reviewData.product_review_message == null ||
      reviewData.product_review_message === undefined ||
      reviewData.product_review_message === ""
    ) {
      tempErrorList = errorlist;
      tempErrorList.push("Review message cannot be empty");
      setErrorlist(tempErrorList);
    }
    if (
      reviewData.product_review_rating == null ||
      reviewData.product_review_message === undefined ||
      reviewData.product_review_message === ""
    ) {
      tempErrorList = errorlist;
      tempErrorList.push("Review Rating is required");
      setErrorlist(tempErrorList);
    }
  }

  //node for ipfs
  async function createNode() {
    try {
      const IPFS_node = await IPFS.create({ repo: "ok" + Math.random() });
      setIpfsNode(IPFS_node);
      return IPFS_node;
    } catch (error) {
      console.log(error);
    }
  }

  //setting up IPFS NODE
  useEffect(() => {
    createNode();
    console.log("ipfs node created" + IPFS_node);
  }, []);

  async function submitReview(e: any) {
    e.preventDefault();
    validate();
    //if (true)//errorlist.length <= 1 && errorlist[0] === "") {
    try {
      const file: any = await IPFS_node.add(reviewData.product_media_list);
      console.log("file cid is " + file.cid.toString());
    } catch (error) {
      console.log(error);
    }

    //setReviewData(new ReviewData()); //clear text box after sending data to blockchain
    sendReward();

    /// create get associated token account
    /// if it doesn't exist , create one
    /// send token to new address
    /// if exist send token to new address
  }

  return (
    <>
      <div className=" w-full p-11 bg-gray-100 p-30 flex-nowrap items-center">
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-indigo-900">
                  Add Review
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.Tell us about yoour experience with the product or
                  service
                </p>
                <img
                  className="w-11/12 rounded-md m-5 shadow-md"
                  src={OnlineReview}
                  alt="online review "
                ></img>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2 ">
              <form onSubmit={submitReview}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6   flex flex-row sm:col-span-3">
                        <label
                          htmlFor="product_name"
                          className="row-auto text-l p-1  font-medium text-indigo-900"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="product_name"
                          id="product_name"
                          value={reviewData.product_name}
                          onChange={(e) => {
                            setReviewData({
                              ...reviewData,
                              product_name: e.target.value,
                            });
                          }}
                          placeholder="e.g. apple iphone 11"
                          className="mt-1 text-l border-solid p-5  focus:ring-indigo-500 border-gray-800 focus:border-indigo-500 block w-1/2 h-1/2 shadow-sm   rounded-md"
                        />
                        <label className="w-1/5 p-5 text-indigo-900 ">
                          Scan Bar Code
                        </label>
                        <button
                          type="button"
                          name="scan_barcode"
                          id="scan_barcode"
                          className=" p-5   block w-max shadow-sm sm:text-sm border-gray-300 bg-indigo-200 hover:border-indigo-600 ml=0 rounded-md"
                        >
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
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        className="block text-m font-medium text-indigo-900"
                      >
                        Review
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm text-l p-5  focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full  border-gray-300 rounded-md"
                          placeholder="I was happy with my purchase of ..."
                          value={reviewData.product_review_message}
                          onChange={(e) => {
                            setReviewData({
                              ...reviewData,
                              product_review_message: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief info about why you loved,liked or hated this
                        product
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Upload picture or video of product
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={(e) => {
                                  loadFile(e);
                                }}
                              ></input>
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>Upload a file</span>
                              <p className="pl-1">or drag and drop</p>
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                          <section className="bg-green-300 w-max h-max">
                            {renderListofFiles()}
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={(e) => {
                        submitReview(e);
                      }}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-m font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
