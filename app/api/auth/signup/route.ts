import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password, phone, role } = await req.json();

    const response = await api.post(`/user/signup`, {
      email,
      password,
      phone,
      role,
    });

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Signup successful',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Signup failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
