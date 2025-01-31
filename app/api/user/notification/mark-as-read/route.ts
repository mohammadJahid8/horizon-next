import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const response = await api.patch(`/user/notification/mark-as-read`);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Notification marked as read successfully!',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Notification mark as read failed:', error.response.status);
    return NextResponse.json({
      status: error.response.status || 500,
      message: error.response.data.message,
    });
  }
}
