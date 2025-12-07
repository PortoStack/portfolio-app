"use client";

export const Loading = () => {
  return (
    <div className="fixed flex items-center justify-center gap-4 md:gap-8 w-full h-screen bg-background text-white">
      <span className="bg-corn-flower w-6 md:w-10 h-6 md:h-10 rounded-full animate-ping" style={{ animationDelay: "0ms" }}></span>
      <span className="bg-corn-flower w-6 md:w-10 h-6 md:h-10 rounded-full animate-ping" style={{ animationDelay: "75ms" }}></span>
      <span className="bg-corn-flower w-6 md:w-10 h-6 md:h-10 rounded-full animate-ping" style={{ animationDelay: "150ms" }}></span>
    </div>
  );
}