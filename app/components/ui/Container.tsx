import { ReactNode, memo } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** When true the container will span the full width (with side padding) instead of a centered max-width */
  fullWidth?: boolean;
}

function Container({ children, className = "", fullWidth = false }: ContainerProps) {
  const baseClass = fullWidth
    ? `w-full px-4 sm:px-6 lg:px-8 ${className}`
    : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`;

  return <div className={baseClass}>{children}</div>;
}

export default memo(Container);


