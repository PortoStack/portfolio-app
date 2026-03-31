"use client";

import Link from "next/link";
import { useProfile } from "@/hook/useProfile";
import { usePathname } from "next/navigation";
import BrandIcon from "./BrandIcon";
import { SidebarSkelaton } from "./Skelaton";

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
  const { data: profile, isLoading } = useProfile();

  const socials = [
    {
      platform: "Facebook",
      icon: "facebook",
      url: "",
    },
    {
      platform: "Github",
      icon: "github",
      url: "",
    },
    {
      platform: "Instagram",
      icon: "instagram",
      url: "",
    },
  ];

  return (
    <aside className="bg-surface min-w-1/2 px-16 py-24">
      <div className="text-white h-full flex flex-col justify-between">
        {isLoading ? (
          <SidebarSkelaton />
        ) : (
          <div>
            <div className="text-5xl max-[769px]:text-4xl">
              {profile?.title}
            </div>
            <h3 className="text-3xl max-[769px]:text-2xl">{profile?.name}</h3>
          </div>
        )}
        <ul className="grid gap-6">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${isActive ? "text-primary" : "text-white"} transition-colors duration-500 delay-100 flex items-center gap-4`}
                >
                  <div
                    className={`${isActive ? "bg-primary w-40" : "bg-white w-20"} h-0.5 rounded-full transition-all duration-500 delay-100`}
                  />
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
                <BrandIcon
                  className="w-8 h-8 fill-white hover:fill-primary transition-colors duration-300"
                  iconKey={social.icon}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
