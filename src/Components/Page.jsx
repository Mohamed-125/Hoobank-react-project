import React from "react";
import styles from "../styles";
import Button from "./Button";

const Page = ({ title, desc, img, reversed, underDesc, component }) => {
  return (
    <div
      className={`flex gap-4   ${
        styles.paddingY
      } lg:flex-col justify-between lg:justify-center ${
        reversed ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-[50%] lg:max-w-[700px] lg:text-center flex flex-col justify-center  lg:w-full mx-auto">
        <h3 className="text-3xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className={`${styles.paragraph} text-[19px] sm:text-[16px] mt-6`}>
          {desc}
        </p>
        {underDesc ? underDesc : <Button styles="mt-6 lg:mx-auto" />}
      </div>
      <div className="w-[50%] lg:max-w-[700px] lg:w-full mx-auto">
        {component ? component : <img src={img} className="mt-7" />}
      </div>
    </div>
  );
};

export default Page;
