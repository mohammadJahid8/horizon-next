'use client';
import { useEffect, useState } from 'react';

const RefreshToken = ({
  accessToken,
  refreshToken,
  tokenRefreshIn,
}: {
  accessToken?: string;
  refreshToken?: string;
  tokenRefreshIn?: string;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(new Date(), new Date(tokenRefreshIn!));
  console.log('currentTime', new Date() >= new Date(tokenRefreshIn!));

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
