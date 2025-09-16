"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Accessibility } from "lucide-react";
import AccessibilityDrawer from "../Acessability/AccessibilityDrawer";

const Preheader = () => {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // ESC to close accessibility
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsAccessibilityOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("main-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      target.focus();
    }
  };

  return (
    <div className="bg-[#3a7e8d] h-12 text-white flex flex-wrap items-center justify-between px-4 sm:px-8 text-sm relative z-50">
      {/* Left Logo + India text */}
      <div className="flex items-center gap-2">
        <img
          src="https://www.nic.gov.in/wp-content/themes/sdo-theme/images/flag.svg"
          alt="Indian Flag"
          className="w-6 h-auto"
        />
        <ul className="flex space-x-2">
          <li>
            <a
              lang="hi"
              href="https://www.इंडिया.सरकार.भारत/"
              className="hover:underline"
            >
              भारत सरकार
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              lang="en"
              href="https://www.india.gov.in/"
              className="hover:underline"
            >
              Government of India
            </a>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Skip link */}
        <span onClick={handleSkip} className="cursor-pointer hover:underline">
          Skip to Main Content
        </span>

        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            className="flex items-center gap-1 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <img src="/languages.svg" />
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isLangOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                English
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                हिंदी
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                বাংলা
              </button>
            </div>
          )}
        </div>

        {/* Accessibility menu */}
        <div>
          <button
            onClick={() => setIsAccessibilityOpen(true)}
            className="flex items-center gap-1 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Accessibility className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Accessibility Drawer */}
      {isAccessibilityOpen && (
        <AccessibilityDrawer onClose={() => setIsAccessibilityOpen(false)} />
      )}
    </div>
  );
};

export default Preheader;
