"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-12 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 pointer-events-none"></div>
      
      <Container>
        {/* Main Footer Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left: Logo and Tagline */}
          <div className="items-start gap-3">
            <Image 
              src="/logoDark.png" 
              alt="Espaze Logo" 
              width={160} 
              height={160}
              className="flex-shrink-0"
            />
              <p className="text-gray-300 ml-2 mt-2 text-sm max-w-xs">
                The platform for the <span className="bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">next generation</span> of commerce
              </p>
            
          </div>

          {/* Right: Contact Information */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-3 bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center gap-2 md:justify-start hover:text-pink-400 transition-colors">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-sm">info@espaze.in</span>
              </div>
              <div className="flex items-center gap-2 md:justify-start hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">1-800-ESPAZE-1</span>
              </div>
              <div className="flex items-center gap-2 md:justify-start hover:text-pink-400 transition-colors">
                <MessageCircle className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Live chat available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright and Links */}
        <div className="relative pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-left">
            © {new Date().getFullYear()} Espaze. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </Container>
    </footer>
  );
}


