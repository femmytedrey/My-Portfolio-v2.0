"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import iconLinks from "./data/links";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showMenuOnMobile = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 transition-all duration-500 ease-in-out 
    bg-[#121212] z-40
    ${scrolled ? "md:bg-[#121212]" : "md:bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 xl:px-0 flex items-center justify-between md:hidden">
        <Link href="#home" className="w-32 relative aspect-[3/1]">
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>
        <AlignJustify onClick={showMenuOnMobile} />
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } max-w-7xl mx-auto px-4 sm:px-10 xl:px-0 md:flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-4 md:pt-0`}
      >
        <Link href="#home" className="w-32 relative aspect-[3/1]">
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            fill
            className="object-contain hidden md:block"
          />
        </Link>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-0 md:space-x-6 lg:space-x-10 text-start w-full md:w-fit`}
        >
          <li
            onClick={() => {
              setActiveLink("home");
              setIsMenuOpen(false);
            }}
            className="px-6 md:px-0 py-3 md:py-0 hover:bg-[#212121] md:hover:bg-transparent"
          >
            <Link
              href="#home"
              className={`hover:opacity-100 opacity-75 block ${
                activeLink === "home" ? "opacity-100" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveLink("skills");
              setIsMenuOpen(false);
            }}
            className="px-6 md:px-0 py-3 md:py-0 hover:bg-[#212121] md:hover:bg-transparent"
          >
            <Link
              href="#skills"
              className={`hover:opacity-100 opacity-75 block ${
                activeLink === "skills" ? "opacity-100" : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveLink("projects");
              setIsMenuOpen(false);
            }}
            className="px-6 md:px-0 py-3 md:py-0 hover:bg-[#212121] md:hover:bg-transparent"
          >
            <Link
              href="#projects"
              className={`hover:opacity-100 opacity-75 block ${
                activeLink === "projects" ? "opacity-100" : ""
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-center space-x-4 w-full md:w-fit justify-between`}
        >
          <div className="flex gap-x-5 order-2 md:order-1">
            {iconLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6"
              >
                <Image
                  src={link.imageUrl}
                  alt={link.alt}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          <Link href="#connect" className="order-1 md:order-2">
            <button className="relative overflow-hidden group border border-white text-white py-3 px-6">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Let&apos;s Connect
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
