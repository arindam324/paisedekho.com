import NextAuth from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "../../../utils/Prisma";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : "",
    }),
  ],
  adapters: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(options);
