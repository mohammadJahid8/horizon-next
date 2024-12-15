import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const response = await api.post(`/auth/reset-password`, {
      email,
      password,
    });

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Password reset successfull',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Password reset failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
