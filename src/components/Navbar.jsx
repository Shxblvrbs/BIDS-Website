import React, { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const sideMenuRef = useRef(null);
  const overlayRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show/hide navbar on scroll
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY){
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Navbar slide animation
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Mobile menu & overlay animations
  useEffect(() => {
    if (!sideMenuRef.current || !overlayRef.current) return;

    if (isMenuOpen) {
      gsap.to(sideMenuRef.current, {
        x: "0%",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(sideMenuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-none opacity-0"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side-menu */}
      <aside
        ref={sideMenuRef}
        className="md:hidden fixed inset-y-0 right-0 text-right w-64 bg-bids-gray z-50 transform -translate-x-full"
      >
        <nav className="text-bids-red font-venus-rising h-full flex flex-col justify-center p-6 space-y-6">
          <a
            href="/"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about-us"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="/solutions"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </a>
          <a
            href="/coming-soon/"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Products & Services
          </a>
          <a
            href="https://forms.office.com/r/MF1Y4FXCxT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </aside>

      {/* Main Navbar */}
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-6 z-50 h-16 border-none sm:inset-x-6 transition-all duration-700"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex w-full items-center justify-between p-4">
            {/* Logo */}
            <div className="flex items-center gap-7">
              <a href="/" className="block lg:hidden">
                <img
                  src="/img/ICON 2.png"
                  alt="logo"
                  className="w-[80px] md:w-[120px]"
                />
              </a>
              <a href="/" className="hidden lg:block">
                <img
                  src="/img/PNG 3 HQ.png"
                  alt="logo"
                  className="w-[500px]"
                />
              </a>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-hover-btn">
                Home
              </a>
              <a href="/about-us" className="nav-hover-btn">
                About Us
              </a>
              <a href="/solutions" className="nav-hover-btn">
                Solutions
              </a>
              <a href="/coming-soon/" className="nav-hover-btn">
                Products & Services
              </a>
              <a
                href="https://forms.office.com/r/MF1Y4FXCxT"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-hover-btn"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-bids-red focus:outline-none"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
