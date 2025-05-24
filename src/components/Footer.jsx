import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-bids-gray py-10 text-slate-200 font-aller-display">
      {/* Top grid: addresses + connect */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Two Addresses */}
        <div className="text-center md:text-left">
          <h4 className="mb-4 text-lg font-semibold text-bids-red">
            Our Offices
          </h4>
          <div className="mb-4">
            <p className="font-bold">Headquarters</p>
            <p>11166 Fairfax Blvd, Ste 500</p>
            <p>Fairfax, VA 22030</p>
          </div>
          <div>
            <p className="font-bold">State of Qatar Office</p>
            <p>7C9X+MHW Al Hadaf/Thawab</p>
            <p>Doha, Qatar</p>
          </div>
        </div>

        {/* Right: Social + Contact Info */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="mb-4 text-lg font-semibold text-bids-red text-center md:text-right">
            Connect With Us
          </h4>
          <div className="flex space-x-6 mb-6 text-2xl">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-bids-red"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-center md:text-right">
            {/* <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+1234567890" className="hover:text-bids-red">
                (123) 456-7890
              </a>
            </p> */}
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@blackstoneintegrated.com" className="hover:text-bids-red">
                info@blackstoneintegrated.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Office Hours:</span><br />
              Mon–Fri, 9 AM–5 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row: centered copyright */}
      <div className="container mx-auto mt-4">
        <p className="text-center text-sm font-light">
          © 2025 Blackstone Integrated Defense Solutions — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
