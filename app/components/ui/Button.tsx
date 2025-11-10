import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "indigo";
  size?: "sm" | "md" | "lg";
  rounded?: "lg" | "full";
  href?: string;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "lg",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5";
  
  const roundedStyles = {
    lg: "rounded-lg",
    full: "rounded-full"
  };
  
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600",
    outline: "bg-transparent hover:bg-purple-50 text-purple-600 border-2 border-purple-300",
    indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
    gradient: "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };


  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${roundedStyles[rounded]} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${roundedStyles[rounded]} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);


