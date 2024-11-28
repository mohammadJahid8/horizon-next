import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const response = await api.post(`/auth/login`, { email, password });

    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data?.data;
      console.log({ accessToken });
      const res = NextResponse.json({
        status: 200,
        message: 'Login successful',
      });

      // Set the access token in cookies
      res.cookies.set('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 60, // 30 minutes
        // maxAge: 15 * 60, // 15 minutes
        path: '/',
      });
      res.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 60, // 30 minutes
        // maxAge: 15 * 60, // 15 minutes
        path: '/',
      });

      const now = new Date();
      const tokenRefreshIn = new Date(now.getTime() + 1 * 30000);
      // const tokenRefreshIn = new Date(now.getTime() + 29 * 60000);

      res.cookies.set('tokenRefreshIn', tokenRefreshIn.toISOString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 29 * 60, // 29 minutes
        path: '/',
      });

      return res;
    }
  } catch (error: any) {
    console.error('Login failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
