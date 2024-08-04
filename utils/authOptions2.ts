import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

dotenv.config(); 

declare module "next-auth"{
    interface User{
        token: string,
        userId: string,
        nick: string,
        point: string,
        balance: string,
        exp: string
    }

    //1. if type error in the user session or token you have to manually extend their types



    interface Session {
        token: string,
        userId: string,
        nick: string,
        point: string,
        balance: string,
        exp: string
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
                username: {},
                password: {}
            },
            async authorize(credentials){
                const response = await postLogin({
                    username: credentials?.username,
                    password: credentials?.password
                });

                if(response.data?.token){
                    return {
                        token: response.data.token,
                        userId: response.data.userId,
                        nick: response.data.nick,
                        point: response.data.point,
                        balance: response.data.balance,
                        exp: response.data.exp
                    } as any
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

            if(user){
                token.token = user.token
                token.userId = user.userId
                token.nick = user.nick
                token.point = user.point
                token.balance = user.balance 
                token.exp = user.exp 
            }

            return token
        },

    },
}
