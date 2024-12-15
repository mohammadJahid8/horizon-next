import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const response = await api.post(`/auth/verify-otp`, {
      email,
      otp,
    });

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'OTP verified successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('OTP sending failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
