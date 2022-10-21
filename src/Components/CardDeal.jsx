import React from "react";
import Page from "./Page";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <div id="product">
      <Page
        title="Find a better card deal in few easy steps."
        img={card}
        desc="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
      />
    </div>
  );
};

export default CardDeal;
