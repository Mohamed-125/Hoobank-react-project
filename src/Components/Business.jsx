import React from "react";
import Page from "./Page";
import { features } from "../data/data";
import styles from "../styles";
const featuresDiv = () => {
  return (
    <div className="flex flex-col  gap-3 ">
      {features.map((feature) => {
        return (
          <div className="flex gap-4 items-center ">
            <div className="">
              <img src={feature.icon} className="w-[40px] min-w-[25px]" />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="text-white font-bold  text-xl">{feature.title} </p>
              <p className={`${styles.paragraph} sm:text-[15px]`}>
                {feature.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Business = () => {
  return (
    <div id="features">
      <Page
        component={featuresDiv()}
        title="You do the business, we’ll handle the money."
        desc="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
      />
    </div>
  );
};

export default Business;
