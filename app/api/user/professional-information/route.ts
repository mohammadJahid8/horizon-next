import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export const config = {
  api: {
      bodyParser: false, 
  },
};

export async function POST(req: Request) {
  try {
    const bodyData = await req.formData();
    const entries = Object.fromEntries(bodyData.entries());

    const { data, ...certificationFiles } = entries;
    
    

    const filesArray:any = Object.values(certificationFiles);

      // console.log(filesArray[0].name);



    const formData = new FormData();

    for (const file of filesArray) {
      formData.append(`certifications`, file as File, file.name);
    }

    formData.append('data', data);

    
    const response = await api.patch(`/user/professional-information`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('🚀 ~ POST ~ response:', response.data);

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
