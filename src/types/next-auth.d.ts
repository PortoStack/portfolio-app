import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name?: string;
    };
  }

  interface User {
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email: string;
  }
}
