import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await api.post(`/auth/forgot-password`, {
      email,
    });

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'OTP sent successfully',
        otpExpiry: response.data.data.otpExpiry,
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
