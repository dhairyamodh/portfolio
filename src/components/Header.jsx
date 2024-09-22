/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Header = ({ handleNavClick, navLinks, activeSection }) => {
  const boxRef = useRef(null); // Ref for the box element
  const initialOffset = 0; // Scroll threshold
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (window.innerHeight < 768) {
        if (boxRef.current) {
          if (scrollY > initialOffset) {
            // Add the class and the forward animation when scrolling past the threshold
            boxRef.current.classList.add("header-fixed", "slide-down");
            boxRef.current.classList.remove("slide-up");
          } else {
            // Remove the class and trigger reverse animation when scrolling back up
            boxRef.current.classList.remove("header-fixed", "slide-down");
            boxRef.current.classList.add("slide-up");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={boxRef}
      className={`container absolute md:fixed left-0 md:left-auto z-10 transition-transform duration-500 py-5 top-0`}
    >
      <div className="relative hidden md:flex items-center justify-between">
        <ul className="flex items-center gap-2">
          {navLinks?.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => handleNavClick(link.id)}
                className={`list-none px-5 font-medium ${
                  activeSection === link.id ? "text-white bg-primary" : ""
                } hover:text-white hover:bg-primary rounded-full py-3 transition-all cursor-pointer`}
              >
                {link?.title}
              </li>
            );
          })}
        </ul>
        <img
          src="/logo.png"
          className="w-12 absolute left-[50%] -translate-x-[50%]"
        />
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-muted p-3 px-10 rounded-full font-medium outline outline-[3px] outline-[transparent] hover:outline-secondary transition-all"
        >
          Contact Me
        </button>
      </div>
      <div className="md:hidden flex items-center justify-between px-4">
        <img src="/logo.png" className="w-10" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar for mobile menu */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-80 backdrop-blur-md bg-white/50 text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <img src="/logo.png" className="w-10" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="#000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-2 py-4 space-y-1">
          {navLinks?.map((link, index) => {
            return (
              <p
                key={index}
                href={`#${link.id}`}
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick(link.id);
                }}
                className={`block px-3 text-lg py-2 uppercase font-medium text-black/80 ${
                  activeSection === link.id
                    ? "bg-primary rounded-md !text-white"
                    : ""
                }`}
              >
                {link.title}
              </p>
            );
          })}
          <p
            className={`block px-3 text-lg py-2 uppercase font-medium text-black/80`}
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </p>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Header;
