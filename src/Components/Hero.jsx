import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <div
      id="home"
      className={`${styles.boxWidth} ${styles.paddingY} flex lg:flex-col lg:items-center gap-[30px] justify-between px-11 md:px-6`}
    >
      <div className="flex relative flex-col">
        <div
          className={`rounded-md px-2 py-1 sm:text-[15px] max-w-[430px] bg-discount-gradient ${styles.paragraph}`}
        >
          <img src={discount} className="w-[30px] inline" />
          <span className="text-white sm:ml-1 sm:text-center ml-4"> 20% </span>
          DISCOUNT FOR <span className="text-white"> 1 MONTH </span> ACCOUNT
        </div>
        <div className="flex gap-11">
          <h2 className="font-poppins text-white text-[45px] sm:text-[38px] mt-6 max-w-[412px] font-bold">
            The Next <span className="text-gradient">Generation</span> Payment
            Method.
          </h2>
          <div className="sm:hidden block">
            <GetStarted />
          </div>
        </div>
        <div>
          <p
            className={`${styles.paragraph} sm:text-[15px] text-[18px] mt-5 max-w-[500px]`}
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="absolute lg:hidden top-[-20px] z-[0] left-[-250px] w-[400px] h-[426px]   white__gradient" />
      </div>
      <div className="relative lg:mt-11">
        <img
          src={robot}
          className="max-w-[450px] sm:w-[calc(100%+60px)] relative sm:right-5"
        />
        <div className="absolute top-[-100px] z-[0] right-[-100px] w-[400px] h-[426px]  pink__gradient" />
        <div className="absolute bottom-[100px] z-[0] right-[-0px] w-[330px] h-[250px]  blue__gradient" />
      </div>
      <div className={"sm:block hidden"}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
