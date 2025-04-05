import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-bids-red py-6 text-bids-gray font-aller-display">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-slate-200 text-center text-sm font-light md:text-left duration-500 transition-colors ease-in-out hover:text-bids-gray">
          © 2025 Blackstone Integrated Defense Solutions, All Rights Reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-200 transition-colors duration-500 ease-in-out hover:text-bids-gray"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-slate-200 text-center text-sm font-light hover:underline md:text-right duration-500 transition-colors ease-in-out hover:text-bids-gray"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;