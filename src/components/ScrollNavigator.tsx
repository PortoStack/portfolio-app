"use client";

import { items } from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollNavigator({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = items.map((item) => item.href);
  const router = useRouter();
  const pathname = usePathname();
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning.current) return;

      const currentIndex = pages.indexOf(pathname);

      if (event.deltaY > 50 && currentIndex < pages.length - 1) {
        isTransitioning.current = true;
        router.push(pages[currentIndex + 1]);
      } else if (event.deltaY < -50 && currentIndex > 0) {
        isTransitioning.current = true;
        router.push(pages[currentIndex - 1]);
      }

      setTimeout(() => {
        isTransitioning.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pathname, router]);

  return <>{children}</>;
}
