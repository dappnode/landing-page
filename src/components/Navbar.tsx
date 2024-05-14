import React, { useState } from "react";
import { FaMoon, FaBars } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

interface NavbarProps {
  onThemeToggle: () => void;
  theme: string;
}

const pages: {
  name: string;
  path: string;
}[] = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "About",
    path: "#about",
  },
];

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative -mb-14 w-full bg-gradient-to-b  from-dappnodePurple/30 via-dappnodePurple/15 via-20% pb-14 dark:from-dappnodePurple/15 lg:-mb-0 lg:px-10">
      <nav className="flex items-center justify-between  p-4 lg:p-6">
        <div className="flex items-center justify-start py-3">
          <button
            onClick={toggleMenu}
            className={`mr-2 p-2 text-xl lg:hidden ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            <FaBars />
          </button>

          {/*Desktop logo*/}
          <div className="hidden lg:block">
            <div className="flex w-full flex-row items-center ">
              <img
                src="dappnode-logo-only.png"
                alt="Logo"
                className="mr-4 h-12"
              />
              <span className="mt-3 text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">
                Landing Page
              </span>
            </div>
          </div>
        </div>

        {/* Mobile logo */}
        <div className="flex w-full flex-row items-center justify-center  pr-10 lg:hidden">
          <img src="dappnode-logo-only.png" alt="Logo" className="mr-4 h-8" />
          <span className="mt-3 text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">
            Landing Page
          </span>
        </div>

        <div className="flex-grow">
          <div className="w-fullitems-center mt-5 hidden justify-evenly gap-10 lg:flex">
            {pages.map((page, index) => (
              <NavLink page={page} key={index} />
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={onThemeToggle}
            className="hidden rounded-full p-2 text-xl text-gray-600 transition-all ease-in-out hover:bg-dappnodeBgLight dark:text-gray-300 dark:hover:bg-black lg:inline-block"
          >
            {theme === "light" ? <FaMoon /> : <MdSunny />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          className="   p-4 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center gap-4">
            {pages.map((page, index) => (
              <NavLink page={page} key={index} />
            ))}
            <button
              onClick={onThemeToggle}
              className="rounded-full p-2 text-xl text-gray-600 transition-all ease-in-out hover:bg-dappnodeBgLight dark:text-gray-300 dark:hover:bg-black"
            >
              {theme === "light" ? <FaMoon /> : <MdSunny />}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
