import { analytics } from '@/src/actions/analytics';
export { auth as middleware } from '@/src/lib/auth';


export function auth(req, res) {

  if (!req.auth && req.nextUrl.pathname !== "/") {
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