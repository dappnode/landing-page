import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  onThemeToggle: () => void;
  theme: string;
}

const pages: {
  name: string;
  path: string;
}[] = [
  {
    name: "About Us",
    path: "#about",
  },
];

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, theme }) => {
  return (
    <nav className="flex justify-between items-center border-b h-28 p-4 md:p-6 bg-dappnodeBgLightHeaderFooter dark:bg-dappnodeBgDarkHeaderFooter">
      <div className="flex items-center">
        <img src="/dappnode-logo-only.png" alt="Logo" className="h-16 mr-4" />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Landing Page
        </span>
      </div>
      <div className="flex gap-4">
        {pages.map((page, index) => (
          <a
            key={index}
            href={page.path}
            className="text-2xl text-gray-900 hover:text-dappnodePurple dark:text-white dark:hover:text-dappnodePurple"
          >
            {page.name}
          </a>
        ))}
      </div>
      <button
        onClick={onThemeToggle}
        className="text-2xl rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
