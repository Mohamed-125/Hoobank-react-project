import React from "react";
import styles from "../styles";
import { close, menu, logo } from "../assets";
import { navLinks } from "../data/data";
import { useState } from "react";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBarHandler = () => {
    setNavOpen((pre) => !pre);
  };

  return (
    <nav
      className={`${styles.boxWidth} flex items-center justify-between navbar py-6 text-white`}
    >
      <img src={logo} className="w-[150px]" />
      {/* the big screens link */}
      <div className="flex gap-5 md:hidden">
        {navLinks.map((link) => (
          <a key={link.id} href={"#" + link.id} className="font-poppins">
            {link.title}
          </a>
        ))}
      </div>
      {/* the small screens link */}
      <div className="relative hidden md:block">
        <img
          src={!navOpen ? menu : close}
          onClick={toggleNavBarHandler}
          className="hidden md:block"
        />
        {navOpen ? (
          <div className="bg-black-gradient rounded-md text-[13px] py-4 w-[120px] sidebar absolute flex left-[-50px] top-11 flex-col items-center justify-center gap-3">
            {navLinks.map((link) => (
              <a key={link.id} href={"#" + link.id} className="font-poppins">
                {link.title}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
