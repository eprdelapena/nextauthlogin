
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

import createMiddleware from 'next-intl/middleware';
import { locales } from '@/config';

export function middleware2(middleware: NextMiddleware){
    return async(request: NextRequest, event: NextFetchEvent) => {



        const handleI18nRouting = createMiddleware({
            locales,
            defaultLocale: "en"
          });
          console.log("middle ware 2", handleI18nRouting);
          const response = handleI18nRouting(request);
        return middleware(request,event);
    }

}
