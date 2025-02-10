import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from './utils/isAuthenticated';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken');
  const isAuthenticatedUser: any = await isAuthenticated(
    token?.value as string
  );

  // console.log('🚀 ~ middleware ~ isAuthenticatedUser:', isAuthenticatedUser);
  // Define all protected routes with patterns
  const protectedRoutes = [
    /^\/pro\/onboard\/(personal-info|professional-info|document-upload|completed)$/,
    /^\/pro\/(profile|offers|jobs|notifications|settings)$/,
    /^\/partner\/(profile|pros|offers|notifications|settings)$/,
    /^\/partner\/pros\/\d+$/, // Matches /partner/pros/:id (numeric)
    /^\/admin$/,
    /^\/admin\/pros$/,
    /^\/admin\/partners$/,
  ];

  // Check if the current path matches any of the protected routes
  const isProtected = protectedRoutes.some((route) =>
    route.test(req.nextUrl.pathname)
  );

  // Check if the current path is an admin route
  const isAdminRoute =
    req.nextUrl.pathname.startsWith('/admin') &&
    !req.nextUrl.pathname.startsWith('/admin/login');

  // Redirect unauthenticated users or non-admin users trying to access protected routes
  if (
    (!isAuthenticatedUser.email && isProtected) ||
    (isAdminRoute && isAuthenticatedUser.role !== 'admin')
  ) {
    if (isAdminRoute) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    } else {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes under `/pro` and `/partner`
  matcher: ['/pro/:path*', '/partner/:path*', '/admin/:path*'],
};
