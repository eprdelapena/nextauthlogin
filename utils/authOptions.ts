import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

dotenv.config(); 

declare module "next-auth"{
    interface User{
        userEmail: string,
        userPassword: string
    }

    //1. if type error in the user session or token you have to manually extend their types



    interface Session {
        userEmail: string;
        userPassword: string;
      }
    
    //   interface User {
    //     id: string;
    //     role: number;
    //   }
}

// declare module "next-auth/jwt" {
//     interface JWT {
//       id: string;
//       role: number;
//     }
//   }
  

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials:{
                userEmail: {},
                userPassword: {}
            },
            async authorize(credentials){
                if(credentials?.userEmail === "eprdelapena@gmail.com" && credentials?.userPassword === "niceonetoyou23"){

                    return {
                        userEmail: credentials?.userEmail,
                        userPassword: credentials?.userPassword
                    } as any;
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/samplelogin"
    },
    callbacks: {
        async session({ session, token }) {
            session.userEmail = token.userEmail as string;
            session.userPassword = token.userPassword as string;

            console.log("this is the session", session);

            return session;
          },

        async jwt({token, user}){

            if(user?.userEmail && user?.userPassword){
                token.userEmail = user.userEmail;
                token.userPassword = user.userPassword;
            }
            return token
        },

    },
}
