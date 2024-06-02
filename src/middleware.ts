import { analytics } from '@/src/utils/analytics';
export { auth as middleware } from '@/src/lib/auth';
import { NextRequest, NextResponse } from 'next/server'

export async function auth(req, res) {
  // if (req.nextUrl.pathname !== '/') {
  //   const url = req.url.replace(req.nextUrl.pathname, '/');
  //   console.log('redirecting to', url);
  //   return Response.redirect(url);
  // }
  console.log('auth middleware called');
  if (req.nextUrl.pathname === '/') {
    try {
      await analytics.track('pageview', {
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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}