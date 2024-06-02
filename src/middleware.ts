import { analytics } from '@/src/utils/analytics';
import {auth} from "@/src/lib/auth";
export { auth as middleware } from '@/src/lib/auth';
import { NextRequest, NextResponse } from 'next/server'

export default auth((req) => {
  // if (!req.auth) {
  //   const url = req.url.replace(req.nextUrl.pathname, '/');
  //   console.log('redirecting to', url);
  //   return Response.redirect(url);
  // }
  
  const NextRequest = req as NextRequest;
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      });
      console.log('pageview tracked');      
    } catch (err) {
      // fail silently to not affect request
      console.error(err);
    }
  }
  console.log('auth middleware ran');
  return NextResponse.next()
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}