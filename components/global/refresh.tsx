'use client';
import { useAppContext } from '@/lib/context';
import { useEffect, useState } from 'react';

const RefreshToken = () => {
  const { cookies, isRefreshed, setIsRefreshed } = useAppContext();
  // const { accessToken, refreshToken, tokenRefreshIn } = cookies;
  const accessToken = cookies?.accessToken;
  const refreshToken = cookies?.refreshToken;
  const tokenRefreshIn = cookies?.tokenRefreshIn;
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log({ isRefreshed });
  console.log(
    'isCurrentTimeGreaterThanTokenRefreshIn',
    new Date(),
    new Date(tokenRefreshIn!)
  );

  useEffect(() => {
    if (!accessToken) return;

    const checkTokenExpiration = async () => {
      const currentTime = new Date();

      if (currentTime >= new Date(tokenRefreshIn!) && !isSubmitting) {
        console.log('Refreshing tokens');
        clearInterval(intervalId);
        setIsSubmitting(true);

        try {
          await fetch('/api/auth/refresh-token', {
            method: 'POST',
            body: JSON.stringify({
              refreshToken,
              reloadUrl: window.location.href,
            }),
          });
          console.log('Success refreshing tokens...');
          setIsRefreshed(true);
        } catch (error) {
          console.error('Error refreshing token:', error);
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 1000);
    return () => clearInterval(intervalId);
  }, [accessToken, isSubmitting, tokenRefreshIn, refreshToken]);

  return null;
};

export default RefreshToken;
