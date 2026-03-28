"use client";

import { useProfile } from "@/hook/useProfile";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const items = [
  { name: "About", href: "/" },
  { name: "Educations", href: "/education" },
  { name: "Skills", href: "/skill" },
  { name: "Projects", href: "/project" },
  // { name: "Experiences", href: "/experience" },
  // { name: "Certifications", href: "/certification" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: profile, isLoading, isError } = useProfile();

  const socials = [
    {
      platform: "Facebook",
      icon: "https://cdn.simpleicons.org/facebook/fff",
      url: "",
    },
    {
      platform: "Github",
      icon: "https://cdn.simpleicons.org/github/fff",
      url: "",
    },
    {
      platform: "Instagram",
      icon: "https://cdn.simpleicons.org/instagram/fff",
      url: "",
    },
  ];

  return (
    <aside className="bg-surface min-w-1/2 px-16 py-24">
      <div className="text-white h-full flex flex-col justify-between">
        <div>
          <h1 className="text-5xl">{profile?.title}</h1>
          <h3 className="text-3xl">{profile?.name}</h3>
        </div>
        <ul className="grid gap-6">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="flex items-center gap-4">
                <div
                  className={`${isActive ? "bg-primary w-40" : "bg-white w-20"} h-0.5 rounded-full transition-all duration-500 delay-100`}
                />
                <Link
                  href={item.href}
                  className={`${isActive ? "text-primary" : "text-white"} transition-colors duration-500 delay-100`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-6 justify-center">
          {socials.slice(0, 3).map((social) => (
            <div key={social.platform}>
              <Link href={social.url} target="__blank">
                <Image
                  src={social.icon}
                  alt={social.platform}
                  width={36}
                  height={36}
                  className="hover:opacity-100 opacity-50 transition-all"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
