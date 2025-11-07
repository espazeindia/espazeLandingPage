import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export default function Card({ children, className = "", hover = true, style }: CardProps) {
  const hoverStyles = hover 
    ? "hover:shadow-xl hover:-translate-y-1 hover:border-purple-300" 
    : "";
  
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-300 ${hoverStyles} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}


