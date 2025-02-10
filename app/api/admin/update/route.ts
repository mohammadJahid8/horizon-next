import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const data = await req.json();

    console.log({ data });

    const response = await api.patch(`/user/update/${data.id}`, data);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'User updated successfully!',
      });
      return res;
    }
  } catch (error: any) {
    console.error('User update failed:', error.response.status);
    return NextResponse.json({
      status: error.response.status || 500,
      message: error.response.data.message,
    });
  }
}
