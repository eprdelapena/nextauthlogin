import { getToken } from 'next-auth/jwt'; //1. Import this
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

export function middleware1(middleware: NextMiddleware){
    return async(request: NextRequest, event: NextFetchEvent) => {
        console.log("middle ware 1");
        const session = await getToken({ req: request, secret: process.env.AUTH_SECRET }); 
        const isOnAccessPage = request.nextUrl?.pathname.startsWith("/samplelogin/accesspage");

        if(!session && isOnAccessPage){
            return NextResponse.redirect(new URL("/samplelogin", request.nextUrl));
        }
        return middleware(request,event);
    }

}


