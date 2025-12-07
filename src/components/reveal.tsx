"use client";

import { useEffect, useRef, useState } from "react";

export const RevealSection = ({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) => {

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 
        ${visible ? "scale-100" : "scale-0"} 
        ${className}`}
    >
      {children}
    </div>
  );
}