import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const bodyData = await req.formData();
    const entries = Object.fromEntries(bodyData.entries());

    const { certificate, resume, governmentId , data } = entries;  

    const formData = new FormData();

    if (certificate) formData.append('certificate', certificate as File);
    if (resume) formData.append('resume', resume as File);
    if (governmentId) formData.append('governmentId', governmentId as File);
    if (data) formData.append('data', data);

    const response = await api.patch(`/user/documents`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('🚀 ~ POST ~ response:', response.data);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Documents uploaded successfully',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Documents upload failed:', error.response);
    return NextResponse.json({
      status: 500,
      message: error.response.data.message,
    });
  }
}
