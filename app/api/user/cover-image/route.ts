import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const bodyData = await req.formData();
    const entries = Object.fromEntries(bodyData.entries());

    const { coverImage } = entries;

    const formData = new FormData();

    if (coverImage) formData.append('coverImage', coverImage as File);

    const response = await api.patch(`/user/cover-image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('🚀 ~ POST ~ response:', response.data);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Cover image updated successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Cover image update failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
