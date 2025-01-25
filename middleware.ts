import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from './utils/isAuthenticated';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken');
  const isAuthenticatedUser = await isAuthenticated(token?.value as string);

  // console.log('🚀 ~ middleware ~ isAuthenticatedUser:', isAuthenticatedUser);

  // Define all protected routes with patterns
  const protectedRoutes = [
    /^\/pro\/onboard\/(personal-info|professional-info|document-upload|completed)$/,
    /^\/pro\/(profile|offers|jobs|notifications|settings)$/,
    /^\/partner\/(profile|pros|offers|notifications|settings)$/,
    /^\/partner\/pros\/\d+$/, // Matches /partner/pros/:id (numeric)
  ];

  // Check if the current path matches any of the protected routes
  const isProtected = protectedRoutes.some((route) =>
    route.test(req.nextUrl.pathname)
  );

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticatedUser && isProtected) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes under `/pro` and `/partner`
  matcher: ['/pro/:path*', '/partner/:path*'],
};
