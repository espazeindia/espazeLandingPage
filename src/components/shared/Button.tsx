import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const buttonVariants: Record<Variant, string> = {
  primary: "text-white shadow-lg hover:shadow-xl",
  secondary: "bg-white hover:bg-gray-50 text-espaze border-2 border-espaze",
  outline: "bg-transparent hover:bg-espaze-soft text-espaze border border-espaze",
};

const buttonSizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-base",
};

const buttonSizeStyles: Record<Size, CSSProperties> = {
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
      style={{ background: variant === "primary" ? "var(--espaze-purple)" : undefined, ...sizeStyles, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
