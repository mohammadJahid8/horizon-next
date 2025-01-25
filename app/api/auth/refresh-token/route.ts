import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Call your Express backend
  const { token, refreshToken, reloadUrl } = await req.json();

  const response = await api.post(`/auth/refresh-token`, {
    refreshToken,
  });

  const { accessToken, refreshToken: newRefreshToken } = response.data?.data;
  const res = NextResponse.json({ message: 'Token refreshed' });

  res.cookies.delete('accessToken');
  res.cookies.delete('refreshToken');
  res.cookies.delete('tokenRefreshIn');

  const now = new Date();
  const tokenRefreshIn = new Date(now.getTime() + 59 * 60 * 1000);

  res.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 1000, // 1 hour
    path: '/',
  });

  res.cookies.set('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 1000, // 1 hour
    path: '/',
  });

  res.cookies.set('tokenRefreshIn', tokenRefreshIn.toISOString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 59 * 60 * 1000, // 59 minutes
    path: '/',
  });

  return res;
}
