"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Footer content */}
      <div
        className={`bg-[#3a7e8d] text-white transition-all duration-300 overflow-hidden ${
          isHidden ? "h-0 opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:px-6 gap-2">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <img
              src="https://www.nic.gov.in/wp-content/themes/sdo-theme/images/flag.svg"
              alt="Indian Flag"
              className="w-5 h-auto"
            />
            <span className="text-sm">© 2025 Government of India</span>
          </div>

          {/* Center Section */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>

          {/* Right Section with Hide/Show Button */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Powered by Shadcn UI & TailwindCSS</span>
            <button
              onClick={() => setIsHidden((prev) => !prev)}
              className="p-1 rounded hover:bg-white/20 transition-colors"
            >
              {isHidden ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
