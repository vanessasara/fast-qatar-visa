'use client'
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return <footer className=" border-t border-[var(--border-color)]">
    <div className="container mx-auto py-8 ">
      <div className="flex flex-col lg:flex-row lg:justify-between  items-center gap-8">
        <div className="font-extrabold text-2xl">Sphereal AI</div>
        <nav className="flex flex-col  md:flex-row  md:gap-16 gap-8 items-center">
          {navItems.map((item) => (
            <a href={item.href} key={item.name}
             className="uppercase text-xs tracking-widest text-gray-400"
             onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(item.href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
             }}
             >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
        <div className="flex justify-center gap-6">
          {socialLinks.map((item) => (
            <a href={item.href} key={item.name}>
              <div  className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="size-4 " />
              </div>
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">© 2025 Sphereal AI. All rights reserved.</p>
      </div>
    </div>

  </footer>;
};

export default Footer;
