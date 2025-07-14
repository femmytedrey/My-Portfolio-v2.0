"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import SocialLink from "../ui/social-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Logo & Contact */}
            <div>
              <div className="mb-6">
                <div className="w-32 relative aspect-[3/1] mb-4">
                  <Image
                    src="/assets/img/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="mailto:femmytedrey@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    femmytedrey@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="tel:+2349067401594"
                    className="hover:text-white transition-colors"
                  >
                    +234 (906) 740-1594
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:items-end">
              <h4 className="text-lg font-semibold mb-4 text-white text-start">
                Follow Me
              </h4>
              <SocialLink />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex justify-center items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>by FemiDev</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
