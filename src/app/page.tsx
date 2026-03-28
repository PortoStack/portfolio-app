"use client";

import { useProfile } from "@/hook/useProfile";

export default function Home() {
  const { data } = useProfile();

  return (
    <div className="text-white grid gap-6">
      <h1 className="text-5xl">About</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.bio || "No bio" }} />
    </div>
  );
}
