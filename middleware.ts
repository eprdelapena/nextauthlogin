
import { getToken } from 'next-auth/jwt'; //1. Import this
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest){
    const session = await getToken({ req: request, secret: process.env.AUTH_SECRET }); 
    const isOnAccessPage = request.nextUrl?.pathname.startsWith("/samplelogin/accesspage");

    if(!session && isOnAccessPage){
        return NextResponse.redirect(new URL("/samplelogin", request.nextUrl));
    }
}

export const config = { //2. specify routes that you want the middleware to run
    matcher: ["/samplelogin/accesspage"]
}
