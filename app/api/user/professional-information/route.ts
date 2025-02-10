import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const bodyData = await req.formData();
    const entries = Object.fromEntries(bodyData.entries());

    const { data, id, ...certificationFiles } = entries;

    const filesArray: any = Object.values(certificationFiles);

    const formData = new FormData();

    for (const file of filesArray) {
      formData.append(`certifications`, file as File, file.name);
    }

    formData.append('data', data);

    const queryId = id ? `?id=${id}` : '';

    console.log('🚀 ~ POST ~ queryId data:', data, queryId);

    const response = await api.patch(
      `/user/professional-information${queryId}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    console.log(
      '🚀 ~ POST ~ response professional-information:',
      response.data
    );

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Personal information updated successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Personal information update failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
