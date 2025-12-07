"use client";

import { signOut } from "next-auth/react";

export default function Header() {

  const handleLogout = () => {
    sessionStorage.clear();
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="fixed flex justify-between border left-60 border-gray-300 bg-white m-4 py-4 px-6">
      <h1 className="text-xl font-bold"></h1>
      <button 
        className="cursor-pointer text-gray-500 hover:text-black transition-colors"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
}