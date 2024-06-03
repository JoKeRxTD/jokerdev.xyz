import { analytics } from '@/src/utils/analytics';
export { auth as middleware } from '@/src/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

export function auth(req, res) {
  console.log('analytics middleware called');
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      })
      console.log('pageview tracked'); 
    } catch (err) {
      // fail silently to not affect request
      console.error(err)
    }
  }

  return res.next();
}


export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}