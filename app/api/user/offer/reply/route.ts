import api from '@/lib/axiosInterceptor';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const { id, ...body } = await req.json();

    console.log({ id, body });

    const response = await api.patch(`/user/offer/notes/${id}`, body);

    if (response.status === 200) {
      const res = NextResponse.json({
        status: 200,
        message: 'Offer reply sent successfully!',
      });
      return res;
    }
  } catch (error: any) {
    console.error('Offer reply failed:', error.response.status);
    return NextResponse.json({
      status: error.response.status || 500,
      message: error.response.data.message,
    });
  }
}
