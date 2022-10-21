import React from "react";
import { quotes } from "../assets";
import { feedbacks } from "../data/data";
import styles from "../styles";
import Page from "./Page";

const Testimonials = () => {
  return (
    <div className="relative">
      <Page
        title="What people are saying about us"
        component={
          <p className={`${styles.paragraph} !text-[15px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        }
      />
      <div className="flex gap-4 lg:flex-col justify-between">
        {feedbacks.map((feedback) => (
          <div
            className={`w-full py-5 px-5 max-w-[370px] lg:max-w-none rounded-md flex-col flex gap-7 ${
              feedback.gradient ? "bg-black-gradient" : null
            }`}
          >
            <img src={quotes} className="max-w-[50px]" />
            <p className="text-white">{feedback.content}</p>
            <div className="flex gap-3">
              <img src={feedback.img} className="max-w-[40px]" />
              <div>
                <p className="text-white">{feedback.name}</p>
                <p className={`${styles.paragraph} !text-[13px]`}>
                  {feedback.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[47px] z-[0] right-[-384px;] w-[618px] h-[607px]  blue__gradient" />
    </div>
  );
};

export default Testimonials;
