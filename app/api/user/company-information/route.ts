import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const bodyData = await req.json();

    const response = await api.patch(`/user/company-information`, bodyData);
    console.log('🚀 ~ POST ~ response:', response.data);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Company information updated successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Company information update failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
