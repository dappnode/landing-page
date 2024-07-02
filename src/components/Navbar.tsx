import React, { useState } from "react";
import { FaMoon, FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

interface NavbarProps {
  onThemeToggle: () => void;
  theme: string;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItem {
  section: string;
  links: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    section: "Shop",
    links: [
      { name: "Shop All", path: "https://dappnode.com/collections/frontpage" },
      {
        name: "Hot Releases",
        path: "https://dappnode.com/collections/hot-releases",
      },
    ],
  },
  {
    section: "Products",
    links: [
      {
        name: "Dappnode Core",
        path: "https://docs.dappnode.io/docs/user/install/overview/",
      },
      {
        name: "Dappnode Home",
        path: "https://dappnode.com/collections/frontpage",
      },
      { name: "Smooth", path: "https://smooth.dappnode.io/" },
    ],
  },
  {
    section: "Learning",
    links: [
      { name: "Documentation", path: "https://docs.dappnode.io/" },
      { name: "Blog", path: "https://dappnode.com/blogs/news" },
      {
        name: "Driving School",
        path: "https://www.youtube.com/playlist?list=PLpMpAvZuB3w56Z__TProOhu767X1Udoyc",
      },
    ],
  },
  {
    section: "Working with us",
    links: [
      { name: "Our Partners", path: "https://dappnode.com/pages/partners" },
    ],
  },
];

const Navbar: React.FC<NavbarProps> = ({
  onThemeToggle,
  theme,
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  const toggleMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between border-b  border-gray-200 p-5 dark:border-dappnodeBgDark">
        <div className="flex min-w-max flex-row items-center">
          <img src="dappnode-logo-only.png" alt="Logo" className="mr-4 h-12" />
          <span className="mt-3 text-xl text-gray-900 dark:text-white lg:text-2xl">
            <span className="text-gray-400">dapp</span>node
          </span>
        </div>

        {/*Desktop header*/}
        <div className=" hidden w-full flex-row md:flex">
          {navItems.map((item, i) => (
            <DesktopNavItem navItem={item} key={i} />
          ))}
        </div>

        <button
          className="hidden rounded-full p-2 text-xl transition-colors duration-300 ease-in-out hover:bg-purple-200 dark:hover:bg-purple-900 md:block"
          onClick={() => onThemeToggle()}
        >
          {" "}
          {theme === "light" ? (
            <FaMoon className=" text-lg text-purple-700" />
          ) : (
            <MdSunny className="text-xl text-orange-500" />
          )}
        </button>

        <button
          className={`text-2xl ${!isMobileNavOpen && "md:hidden"} dark:text-dappnodeDarkText`}
          onClick={() => toggleMenu()}
        >
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/*Mobile header*/}
      {
        <div className="relative">
          <div
            className={`absolute left-0 top-0 flex h-screen w-full -translate-x-full flex-col gap-5 px-5 py-10 ${isMobileNavOpen && "translate-x-0 "} bg-dappnodeBgLightHeaderFooter font-poppins transition-all duration-500 ease-in-out dark:bg-dappnodeBgDarkLayout dark:text-dappnodeDarkText`}
          >
            {navItems.map((item, i) => (
              <MobileNavItem navItem={item} key={i} />
            ))}
            <div className="flex flex-row items-center gap-1">
              <div>Theme:</div>
              <button
                onClick={() => onThemeToggle()}
                className="rounded-full p-2 text-xl transition-colors duration-300 ease-in-out hover:bg-purple-200 dark:hover:bg-purple-900"
              >
                {theme === "light" ? (
                  <FaMoon className=" text-lg text-purple-700" />
                ) : (
                  <MdSunny className="text-xl text-orange-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;

function MobileNavItem({ navItem }: { navItem: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full flex-row justify-between">
        <div>{navItem.section}</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && "rotate-180"} transition-all duration-300 ease-in-out`}
        >
          <FaChevronDown />{" "}
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="flex flex-col gap-4 border-l border-purple-400 pl-5 font-light dark:border-l-purple-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {navItem.links.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="max-w-fit  hover:text-dappnodePurple"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function DesktopNavItem({ navItem }: { navItem: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex w-full flex-row items-center justify-center font-poppins">
      <div className="group flex flex-col ">
        <div className="flex cursor-pointer flex-row items-center justify-center gap-5 group-hover:text-dappnodePurple dark:text-dappnodeDarkText">
          {navItem.section} <FaChevronDown />
        </div>
        <div className=" "></div>
      </div>
    </div>
  );
}
