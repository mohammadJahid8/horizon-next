import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const email = await req.json();

    const response = await api.post(`/user/waitlist`, {
      email,
    });

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'You have been added to the waitlist!',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Email add to waitlist failed:', error.response.status);
    return NextResponse.json({
      status: error.response.status || 500,
      message: error.response.data.message,
    });
  }
}
