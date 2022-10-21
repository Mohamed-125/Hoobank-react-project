import React from "react";
import { logo } from "../assets";
import { footerLinks } from "../data/data";
import styles from "../styles";

const Footer = () => {
  return (
    <div>
      <div className=" flex mt-20  py-11 lg:block items-center justify-between">
        <div className="max-w-[450px]">
          <img src={logo} className="w-[200px] mb-7" />
          <p className={`${styles.paragraph}`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex gap-16 lg:mt-11 flex-wrap justify-between">
          {footerLinks.map((footerSection) => {
            return (
              <div className="flex text-white flex-col self-start gap-3 min-h-[100px]">
                <h2 className="text-xl font-bold">{footerSection.title}</h2>
                {footerSection.links.map((link) => {
                  return <a>{link.name}</a>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
