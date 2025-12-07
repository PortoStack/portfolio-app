"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGoogle, FaArrowLeft } from "react-icons/fa";

export default function SignIn() {

  const { data: session } = useSession();
  const router = useRouter();
  
  const handleSignIn = () => {
    signIn("google");
    router.push("/admin");
  } 

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session, router]);


  return (
    <div className="relative h-screen flex justify-center items-center bg-background text-white">
      <Link href="/" className="absolute left-6 top-6 md:text-2xl transition-all hover:text-corn-flower"><FaArrowLeft /></Link>
      <button
        className="flex items-center gap-2 bg-corn-flower/70 text-white px-4 py-2 rounded-md hover:bg-corn-flower/30 transition-all cursor-pointer"
        onClick={handleSignIn}
      >
        <FaGoogle /> Sign In with Google
      </button>
    </div>
  );
}