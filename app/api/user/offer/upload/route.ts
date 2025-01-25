import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const bodyData = await req.formData();
    const entries = Object.fromEntries(bodyData.entries());

    const { id, ...documents } = entries;

    const filesArray: any = Object.values(documents);

    const formData = new FormData();

    for (const file of filesArray) {
      formData.append(`documents`, file as File, file.name);
    }

    const response = await api.post(`/user/offer/upload/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('🚀 ~ POST ~ response:', response.data);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Documents submitted successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Documents submission failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
