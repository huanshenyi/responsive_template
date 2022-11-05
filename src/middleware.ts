import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// TODO機能してない
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith('/schedule')) {
    // return NextResponse.rewrite(new URL('/about-2', request.url));
  }
}

export const config = {
  matcher: '/:path*',
};
