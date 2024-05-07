import { NextRequest, NextResponse } from 'next/server';
import { analytics } from '@/src/utils/analytics';
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      await analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      });
    } catch (err) {
      // fail silently to not affect request
      console.error(err);
    }
  }

  return NextResponse.next();
}

export const matcher = {
  matcher: ['/'],
};
