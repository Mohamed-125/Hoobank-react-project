import React from "react";
import Page from "./Page";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <div>
      <Page
        title="Easily control your billing & invoicing."
        desc="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
        reversed={true}
        underDesc={
          <div className="flex gap-4 flex-wrap xs:justify-center mt-6 mb-4 lg:mx-auto">
            <img src={google} />
            <img src={apple} />
          </div>
        }
        img={bill}
      />
    </div>
  );
};

export default Billing;
