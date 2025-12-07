"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  const pathname = usePathname();

  const quickLink = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  if (pathname === "/sign-in") return null;
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-background text-gray-300 py-6">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-lg font-bold">PortoStack</div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 my-4 md:my-0">
          {quickLink.map((link) => {
            if (pathname === "/") {
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-corn-flower transition-all"
                >
                  {link.name}
                </button>
              );
            } else {
              return (
                <Link
                  key={link.id}
                  href="/"
                  className="hover:text-corn-flower transition-all"
                  onClick={() => setTimeout(() => scrollToSection(link.id), 200)}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </div>

        {/* Social */}
        <div className="flex gap-4 text-xl">
          <Link href="https://instagram.com/yourprofile" target="_blank" className="hover:text-corn-flower">
            <FaInstagram />
          </Link>
          <Link href="https://github.com/PortoStack" target="_blank" className="hover:text-corn-flower">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/PortoStack" target="_blank" className="hover:text-corn-flower">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-6 mx-6">
        &copy; {new Date().getFullYear()} PortoStack. All rights reserved. Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}

