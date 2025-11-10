"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      // ensure observer is cleaned up to avoid memory leaks
      try {
        observer.disconnect();
      } catch {
        // noop
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "fade":
        return "";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className={!isVisible ? getDirectionClass() : ""}>
        {children}
      </div>
    </div>
  );
}

