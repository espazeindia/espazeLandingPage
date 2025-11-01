import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import Button from "./Button";

const NAV_LINKS = [
  { href: "#service", label: "Service" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = memo(() => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[65px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_light.png"
            alt="Espaze Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Button size="sm">Login</Button>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
