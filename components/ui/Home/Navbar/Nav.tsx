"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/ui/helper/Logo";
import { NavLinks } from "@/Constant/Constant";
import Link from "next/link";
import { Download, MenuIcon } from "lucide-react";
import ThemeToggler from "../../helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
    window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full ${
        navBg ? "bg-white dark:bg-gray-800 shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Download Resume */}
          <a
            href="/resume/Ankit_Gupta_Resume.pdf"
            download
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-300 hover:bg-indigo-700 hover:ring-offset-indigo-500 focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggler />

          {/* Mobile Menu */}
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;