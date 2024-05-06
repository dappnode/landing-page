import React, { useState } from "react";
import { FaMoon, FaBars } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

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
];

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between border-b p-4 md:p-6 bg-dappnodeBgLightHeaderFooter dark:bg-dappnodeBgDarkHeaderFooter z-10">
        <div className="flex items-center justify-start">
          <img
            src="/dappnode-logo-only.png"
            alt="Logo"
            className="h-10 md:h-12 mr-4"
          />
          <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Landing Page
          </span>
        </div>

        <div className="flex-grow">
          <div className="hidden md:flex justify-center items-center gap-4">
            {pages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="text-lg md:text-xl text-gray-900 hover:text-dappnodePurple dark:text-white dark:hover:text-dappnodePurple"
              >
                {page.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 text-xl ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            <FaBars />
          </button>
          <button
            onClick={onThemeToggle}
            className="hidden md:inline-block text-xl rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {theme === "light" ? <FaMoon /> : <MdSunny />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-full inset-x-0 p-4 bg-dappnodeBgLightHeaderFooter dark:bg-dappnodeBgDarkHeaderFooter md:hidden z-0">
          <div className="flex flex-col items-center gap-4">
            {pages.map((page, index) => (
              <a
                key={index}
                href={page.path}
                className="text-lg text-gray-900 hover:text-dappnodePurple dark:text-white dark:hover:text-dappnodePurple"
              >
                {page.name}
              </a>
            ))}
            <button
              onClick={onThemeToggle}
              className="text-xl rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {theme === "light" ? <FaMoon /> : <MdSunny />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
