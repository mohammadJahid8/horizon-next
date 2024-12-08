/* eslint-disable react/prop-types */

import { getTokens, getUser, logout } from '@/app/actions';
import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '@/app/firebase/firebase.init';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isOpenNeedMore, setIsOpenNeedMore] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [cookies, setCookies] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const openNeedMore = () => {
    setIsOpenNeedMore(true);
  };

  const openPartner = () => {
    setIsPartnerOpen(true);
  };

  const closeNeedMore = () => {
    setIsOpenNeedMore(false);
  };

  const closePartner = () => {
    setIsPartnerOpen(false);
  };

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser();
      setUser(user);
    };
    getUserData();
  }, [user?.name, cookies]);

  useEffect(() => {
    const getCookies = async () => {
      const cookies = await getTokens();
      setIsRefreshed(false);
      setCookies(cookies);
    };

    getCookies();
  }, [isRefreshed]);

  console.log({ cookies, user });

  const logInWithGoogle = async () => {
    let result = null,
      error = null;
    try {
      result = await signInWithPopup(auth, googleProvider);
    } catch (e) {
      error = e;
    }

    return { result, error };
  };

  const logOut = async () => {
    await logout();
    router.push('/');
    setUser(null);
  };

  const handleLogin = async (data: any, source: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        source,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      source === 'pro'
        ? (window.location.href = '/pro/onboard/personal-info')
        : (window.location.href = `/partner/pros`);
      return toast.success(responseData.message || `Login successful`, {
        position: 'top-center',
      });
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `Login failed`, {
        position: 'top-center',
      });
    }
  };

  const handleSignup = async (data: any, source: string) => {
    console.log('🚀 ~ handleSignup ~ data:', data);
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: source,
      }),
    });

    const responseData: any = await response.json();
    console.log('responseData', responseData);

    if (responseData.status === 200) {
      source === 'pro'
        ? router.push('/pro/login')
        : router.push('/partner/login');
      return toast.success(responseData.message || `Signup successful`, {
        position: 'top-center',
      });
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `Signup failed`, {
        position: 'top-center',
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        openNeedMore,
        openPartner,
        closeNeedMore,
        closePartner,
        isOpenNeedMore,
        isPartnerOpen,
        cookies,
        isRefreshed,
        setIsRefreshed,
        logOut,
        logInWithGoogle,
        isLoading,
        setIsLoading,
        handleLogin,
        handleSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
