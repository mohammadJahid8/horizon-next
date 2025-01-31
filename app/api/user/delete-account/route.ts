import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function DELETE() {
  try {
    const response = await api.delete(`/user/delete-account`);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Account deleted successfully!',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Account delete failed:', error.response.status);
    return NextResponse.json({
      status: error.response.status || 500,
      message: error.response.data.message,
    });
  }
}
