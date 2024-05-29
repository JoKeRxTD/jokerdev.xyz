import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { analytics } from '@/src/utils/analytics';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, '/');
    return Response.redirect(url);
  }

  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      });
    } catch (err) {
      // fail silently to not affect request
      console.error(err);
    }
  }

});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}