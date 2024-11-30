'use server';
import api from '@/lib/axiosInterceptor';
import { cookies } from 'next/headers';
export async function getUser() {
  try {
    const response = await api.get(`/user/profile`);
    // console.log('response', response.data);
    return response.data.data;
  } catch (error) {
    // console.error('Error fetching user profile:', error);
    return null;
  }
}

export async function getTokens() {
  const accessToken = cookies().get('accessToken')?.value;
  const refreshToken = cookies().get('refreshToken')?.value;
  const tokenRefreshIn = cookies().get('tokenRefreshIn')?.value;
  return { accessToken, refreshToken, tokenRefreshIn };
}

export async function logout() {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
  cookies().delete('tokenRefreshIn');
}
