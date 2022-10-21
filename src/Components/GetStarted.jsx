import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div className="bg-blue-gradient p-[2px] w-[120px]  h-[120px] relative top-11 rounded-[50%] cursor-pointer flex items-center justify-center">
      <div className="w-[100%] h-[100%] bg-primary rounded-full flex items-center justify-center">
        <p className="text-gradient font-bold text-[16px]">
          Get
          <img
            src={arrowUp}
            className="inline mr-[10px] ml-[2px] w-[20px] h-[20px]"
          />
          <br />
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
