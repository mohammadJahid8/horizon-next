import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Call your Express backend
  const { token, refreshToken, reloadUrl } = await req.json();

  const response = await api.post(`/auth/refresh-token`, {
    refreshToken,
  });
  console.log('inside refresh token');

  const { accessToken } = response.data?.data;
  const res = NextResponse.json({ message: 'Token refreshed' });

  res.cookies.delete('accessToken');
  res.cookies.delete('tokenRefreshIn');

  const now = new Date();
  const tokenRefreshIn = new Date(now.getTime() + 1 * 30000);
  // const tokenRefreshIn = new Date(now.getTime() + 29 * 60000);

  res.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 60, // 30 minutes
    // maxAge: 15 * 60, // 15 minutes
    path: '/',
  });

  res.cookies.set('tokenRefreshIn', tokenRefreshIn.toISOString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 29 * 60, // 29 minutes
    path: '/',
  });

  return res;
}
