"use client";

import { AboutSkelaton } from "@/components/Skelaton";
import { useProfile } from "@/hook/useProfile";

export default function Home() {
  const { data, isLoading } = useProfile();

  return (
    <div className="text-white grid gap-6">
      <h1 className="text-5xl">About</h1>
      {isLoading ? (
        <AboutSkelaton />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data?.bio || "No bio" }} />
      )}
    </div>
  );
}
