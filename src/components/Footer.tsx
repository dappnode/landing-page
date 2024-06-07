import { FaLinkedin, FaGithub, FaTwitter, FaMediumM } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoDiscord, IoPeopleOutline } from "react-icons/io5";

const MAIN_SITE_URL = "https://dappnode.io";

const socials = [
  {
    name: "Discord",
    path: "https://discord.gg/dappnode",
    Icon: IoLogoDiscord,
  },
  {
    name: "Forum",
    path: "https://discourse.dappnode.io/",
    Icon: IoPeopleOutline,
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
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/company/dappnode",
    Icon: FaLinkedin,
  },
  {
    name: "Medium",
    path: "https://medium.com/dappnode",
    Icon: FaMediumM,
  },
];

const supporters = [
  { logo: "/eu-logos/europe-flag.avif", alt: "European union flag" },
  {
    logo: "/eu-logos/europe-next-gen-logo.avif",
    alt: "NextGeneration EU Logo",
  },
  { logo: "/eu-logos/sepe-logo.webp", alt: "PRTR Logo" },
  { logo: "/eu-logos/PRTR-logo.avif", alt: "SEPE Logo" },
];

const dappnodeLinks = [
  {
    name: "Home",
    path: "https://dappnode.com/",
  },
  {
    name: "Products",
    path: "https://dappnode.com/collections/all",
  },
  {
    name: "About",
    path: "https://dappnode.com/pages/about",
  },
  {
    name: "Documentation",
    path: "https://docs.dappnode.io/",
  },
  {
    name: "Partners",
    path: "https://dappnode.com/pages/partners",
  },
  {
    name: "Smooth",
    path: "https://smooth.dappnode.io/",
  },
  {
    name: "Dappnode Driving School",
    path: "https://www.youtube.com/playlist?list=PLpMpAvZuB3w56Z__TProOhu767X1Udoyc",
  },
];

const helpLinks = [
  {
    name: "Billing & Invoice",
    path: "https://dappnode.com/pages/customer-support#customer-support",
  },
  {
    name: "Order Management",
    path: "https://dappnode.com/pages/customer-support#faq-order-management",
  },
  {
    name: "Shipping",
    path: "https://dappnode.com/pages/customer-support#faq-shipping",
  },
  {
    name: "Returns",
    path: "https://dappnode.com/pages/customer-support#faq-returns",
  },
  {
    name: "Contact us",
    path: "https://dappnode.com/pages/customer-support#contact-us",
  },
];

const seeAlsoLinks = [
  { name: "About", path: "https://dappnode.com/pages/about" },
  {
    name: "Terms & Conditions",
    path: "https://dappnode.com/pages/terms-conditions",
  },
  { name: "Privacy Policy", path: "https://dappnode.com/pages/privacy-policy" },
  {
    name: "Legal Terms and conditions",
    path: "https://dappnode.com/pages/legal-terms-and-conditions",
  },
  { name: "Cookie Policy", path: "https://dappnode.com/pages/cookie-policy" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-4 bg-purple-700 pt-5  md:justify-between ">
      <div className="flex w-full flex-col gap-10 ">
        <div className=" grid w-full grid-cols-2 items-center justify-evenly gap-5 border-b  border-purple-800 px-5 lg:flex lg:flex-row lg:py-10">
          {supporters.map((sup, i) => (
            <div className="flex flex-1 items-center justify-center">
              <div className="tems-center flex w-full justify-center lg:w-1/2">
                <img src={sup.logo} alt={sup.alt} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col justify-evenly gap-10 px-5 lg:flex-row ">
          <nav className="flex flex-col gap-3 font-poppins">
            <p className="text-xs text-white ">CONNECT WITH US</p>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.path}
                className=" flex flex-row items-center gap-3 text-purple-200 hover:text-dappnodeDarkText"
              >
                <social.Icon className="h-5 w-5 text-xl" />
                <span className="font-poppins text-xs ">{social.name}</span>
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 font-poppins">
            <p className=" text-xs text-white">PRODUCTS</p>
            {dappnodeLinks.map((prod, index) => (
              <a
                key={index}
                href={prod.path}
                className=" text-xs text-purple-200 hover:text-dappnodeDarkText"
              >
                {prod.name}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 font-poppins">
            <p className=" text-xs text-white">HELP</p>
            {helpLinks.map((help, index) => (
              <a
                key={index}
                href={help.path}
                className=" text-xs text-purple-200 hover:text-dappnodeDarkText"
              >
                {help.name}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 font-poppins">
            <p className=" text-xs text-white">SEE ALSO</p>
            {seeAlsoLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className=" text-xs text-purple-200 hover:text-dappnodeDarkText"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex h-full w-full flex-row items-center justify-center gap-1 bg-purple-800 p-5 lg:justify-between">
        {/* Link with logo and text */}
        <div className="flex flex-row">
          <a href={MAIN_SITE_URL} rel="noopener noreferrer" target="_blank">
            <img
              className="drop-shadow-lg"
              alt="Dappnode logo"
              height={26}
              src="./dappnode-logo-only.png"
              width={26}
            />
          </a>
          <a href={MAIN_SITE_URL} rel="noopener noreferrer" target="_blank">
            <h4 className="ml-2 mt-2 flex items-center justify-center text-sm text-dappnodeDarkText hover:underline lg:text-left">
              Dappnode <FiExternalLink className="ml-1" />
            </h4>
          </a>
        </div>
        {/* Right side text */}
        <h4 className="mt-1 hidden text-center text-dappnodeDarkText lg:mx-3 lg:block lg:text-left lg:text-sm">
          Decentralized P2P Networking | © 2024
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
