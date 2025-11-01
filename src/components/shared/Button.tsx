import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const buttonVariants = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl",
  secondary: "bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 hover:border-indigo-700",
  outline: "bg-transparent hover:bg-indigo-50 text-indigo-600 border border-indigo-600",
};

const buttonSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-base",
};

const buttonSizeStyles: Record<string, CSSProperties> = {
  sm: { paddingInline: "calc(var(--spacing) * 5)", paddingBlock: "0.375rem" },
  md: { paddingInline: "calc(var(--spacing) * 6)", paddingBlock: "1rem" },
  lg: { paddingInline: "calc(var(--spacing) * 8)", paddingBlock: "1rem" },
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  style,
  ...props
}: ButtonProps) {
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  const sizeStyles = buttonSizeStyles[size];

  return (
    <button
      className={`rounded-lg font-medium transition-all transform hover:-translate-y-0.5 ${variantClasses} ${sizeClasses} ${className}`}
      style={{ ...sizeStyles, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
