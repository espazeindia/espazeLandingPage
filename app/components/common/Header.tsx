"use client";

import { useState, useEffect } from "react";
import { Package, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`${
        isScrolled 
          ? 'max-w-full' 
          : 'max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-4 md:mt-6'
      }`}>
        <div className={`
          backdrop-blur-md border border-white/5 shadow-lg
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/70 rounded-none' 
            : 'bg-white/10 rounded-full'
          }
        `}>
          <Container>
            <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image 
              src={pathname === "/" && !isScrolled ? "/logoDark.png" : "/logoLight.png"}
              alt="espaze" 
              width={100} 
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-colors ${
                isActive("/")
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                  : pathname === "/" && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-colors ${
                isActive("/about")
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                  : pathname === "/" && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link
              href="/seller"
              className={`font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-colors ${
                isActive("/seller")
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                  : pathname === "/" && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Sellers
            </Link>
            <Link
              href="/customer"
              className={`font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-colors ${
                isActive("/customer")
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                  : pathname === "/" && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Customers
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="gradient" size="sm" rounded="full">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors py-2 rounded-lg ${
                  isActive("/")
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md px-3"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors py-2 rounded-lg ${
                  isActive("/about")
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md px-3"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/seller"
                className={`hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors py-2 rounded-lg ${
                  isActive("/seller")
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md px-3"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Sellers
              </Link>
              <Link
                href="/customer"
                className={`hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors py-2 rounded-lg ${
                  isActive("/customer")
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md px-3"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Customers
              </Link>
              <Button variant="gradient" size="sm" rounded="full" className="w-full">
                Request a Demo
              </Button>
            </div>
          </div>
        )}
          </Container>
        </div>
      </div>
    </header>
  );
}

