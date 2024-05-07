import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoDiscord } from "react-icons/io5";

const MAIN_SITE_URL = "https://dappnode.io";

const socials = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/company/dappnode",
    Icon: FaLinkedin,
  },
  {
    name: "Discord",
    path: "https://discord.gg/dappnode",
    Icon: IoLogoDiscord,
  },
  {
    name: "GitHub",
    path: "https://github.com/dappnode",
    Icon: FaGithub,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/dappnode",
    Icon: FaTwitter,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex h-36 flex-col items-center justify-center gap-y-4 border-t  bg-dappnodeBgLightHeaderFooter dark:bg-dappnodeBgDarkHeaderFooter sm:h-20 sm:flex-row sm:justify-between md:px-12">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {/* Link with logo and text */}
        <div className="flex flex-col items-center gap-y-4 hover:underline sm:flex-row">
          <a href={MAIN_SITE_URL} rel="noopener noreferrer" target="_blank">
            <img
              alt="Dappnode logo"
              height={26}
              src="./dappnode-logo-only.png"
              width={26}
            />
          </a>
          <a href={MAIN_SITE_URL} rel="noopener noreferrer" target="_blank">
            <h4 className="ml-4 mt-2 flex items-center justify-center text-sm sm:text-left text-gray-800 dark:text-gray-200">
              Dappnode <FiExternalLink className="ml-1" />
            </h4>
          </a>
        </div>
        {/* Right side text */}
        <h4 className="mt-2 text-center text-sm sm:mx-3 sm:text-left text-gray-800 dark:text-gray-200">
          | Decentralized P2P Networking | © 2024
        </h4>
      </div>

      <nav className="flex gap-x-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.path}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <social.Icon className="h-5 w-5 text-xl" />
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
