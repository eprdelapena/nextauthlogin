import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import { authOptions } from "@/utils/authOptions";

dotenv.config(); 


const handler = NextAuth(authOptions); 
export { handler as GET, handler as POST }