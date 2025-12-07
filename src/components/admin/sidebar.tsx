"use client";

import { signOut } from "next-auth/react";

export default function Sidebar() {

  const options = [
    { name: "Dashboard", href: "/admin" },
    { name: "About", href: "/admin/about" },
    { name: "Education", href: "/admin/education" },
    { name: "Skills", href: "/admin/skills" },
    { name: "Projects", href: "/admin/projects" },
    { name: "Certificates", href: "/admin/certificates" },
    { name: "Social", href: "/admin/social" },
    { name: "Contact", href: "/admin/contact" },
  ];

  const handleLogout = () => {
      sessionStorage.clear();
      signOut({ callbackUrl: "/" });
    };

  return (
    <div className="min-w-60 border-r border-gray-300 bg-white p-4">
      <div className="fixed flex justify-between border left-60 top-0 w-[calc(100%-240px)] border-gray-300 bg-white m-4 py-4 px-6">
        <h1 className="text-xl font-bold"></h1> 
        <button
          className="cursor-pointer text-gray-500 hover:text-black transition-colors"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      <ul className="grid gap-2">
        {options.map((option) => (
          <li key={option.name} className="hover:bg-gray-100 py-2 px-4 transition-colors cursor-pointer">
            <a href={option.href}>{option.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}