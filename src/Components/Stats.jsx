import React from "react";
import styles from "../styles";
import { stats } from "../data/data";
const Stats = () => {
  return (
    <div className="flex justify-between mt-[30px] flex-wrap">
      {stats.map((stat, index) => {
        return (
          <div
            id={stat.id}
            className={`flex flex-wrap  mx-7 my-4 items-center gap-1 ${
              index === 2
                ? "border-white border-l-2 pl-[100px]"
                : index === 0
                ? "border-white border-r-2 pr-[100px]"
                : null
            } lg:border-0 lg:pr-[0px] lg:pl-[0px]`}
          >
            <p className="text-white text-[25px] sm:text-[20px] font-semibold ">
              {stat.value}
            </p>
            <p className="text-gradient uppercase sm:text-[15px]">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
