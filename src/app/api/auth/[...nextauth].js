//[...nextauth].js


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb"; // връзка към MongoDB

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Логика за автентикация
        const user = await fetchUserFromDatabase(credentials.email, credentials.password);
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', 
  },
  session: {
    strategy: "jwt", 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
});
