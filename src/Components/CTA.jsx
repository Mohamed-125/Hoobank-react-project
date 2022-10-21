import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles from "../styles";
import Button from "./Button";
const CTA = () => {
  return (
    <div id="clients">
      <div className="flex justify-between flex-wrap gap-5 items-center my-14">
        <img src={airbnb} className="max-w-[200px] sm:w-[100px]" />
        <img src={binance} className="max-w-[200px]  sm:w-[100px]" />
        <img src={coinbase} className="max-w-[200px] sm:w-[100px]" />
        <img src={dropbox} className="max-w-[200px] sm:w-[100px]" />
      </div>
      <div className="bg-black-gradient-2  flex sm:flex-col gap-5 py-14 sm:px-5 items-center justify-between px-14 rounded-lg ">
        <div className="max-w-[600px]">
          <h3 className="text-3xl mb-4 font-bold text-white sm:text-2xl">
            Let’s try our service now!
          </h3>
          <p className={`${styles.paragraph} text-[19px] sm:text-[14px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CTA;
