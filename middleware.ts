
import { getToken } from 'next-auth/jwt'; //1. Import this
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './config';


const internalizationMiddleware = createMiddleware({
    locales,
    defaultLocale: "en",
})

export async function middleware(request: NextRequest){
    const session = await getToken({ req: request, secret: process.env.AUTH_SECRET }); 
    const isOnAccessPage = request.nextUrl?.pathname.startsWith("/samplelogin/accesspage");
    const response = NextResponse.next();

    if(!session && isOnAccessPage){
        return NextResponse.redirect(new URL("/samplelogin", request.nextUrl));
    }
    return internalizationMiddleware(request);
}


export const config = { //2. specify routes that you want the middleware to run
    matcher: ["/samplelogin/accesspage", "/", "/(de|en)/:path*"],
}
