/* eslint-disable react/prop-types */

import {
  getNotifications,
  getOffers,
  getTokens,
  getUser,
  getUsers,
  logout,
} from '@/app/actions';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '@/app/firebase/firebase.init';
import { toast } from 'sonner';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [cookies, setCookies] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpResend, setIsOtpResend] = useState(false);
  const [isResendOTPLoading, setIsResendOTPLoading] = useState(false);
  const [offerData, setOfferData] = useState<any>(null);
  const [actionData, setActionData] = useState<any>(null);
  const [isOpenOfferAction, setIsOpenOfferAction] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [adminEditData, setAdminEditData] = useState<any>({
    data: null,
    source: null,
  });

  // refs
  const personalInfoRef = useRef<HTMLFormElement>(null);
  const professionalInfoRef = useRef<HTMLFormElement>(null);

  const documentUploadRef = useRef<HTMLFormElement>(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const shouldStorePro = searchParams.get('s') === 'true';
  const queryString = searchParams.toString();
  const querySuffix = queryString ? `?${queryString}` : '';

  const openEditModal = (data: any, source: string) => {
    setIsOpenEditModal(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openOfferAction = () => {
    setIsOpenOfferAction(true);
  };

  const closeOfferAction = () => {
    setIsOpenOfferAction(false);
  };

  const openAlert = () => {
    setIsOpenAlert(true);
  };

  const openPartner = (data: any) => {
    setIsPartnerOpen(true);
    setOfferData(data);
  };

  const closeAlert = () => {
    setIsOpenAlert(false);
  };

  const closePartner = () => {
    setIsPartnerOpen(false);
  };

  const {
    refetch: refetchUser,
    data: user,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: [`user`],
    queryFn: async () => await getUser(),
  });

  const {
    refetch: refetchUsers,
    data: users,
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: [`users`],
    queryFn: async () => await getUsers(),
  });

  const { refetch: refetchNotifications, data: notifications } = useQuery({
    queryKey: [`notifications`, user?._id],
    queryFn: async () => await getNotifications(),
  });

  const {
    refetch: refetchOffers,
    data: offers,
    isLoading: isOffersLoading,
  } = useQuery({
    queryKey: [`offers`, user?._id],
    queryFn: async () => await getOffers(),
  });

  const pendingOffers = offers?.filter(
    (offer: any) => offer.status === 'pending'
  );
  const acceptedOffers = offers?.filter(
    (offer: any) => offer.status === 'accepted'
  );
  const pros = users?.filter((user: any) => user.role === 'pro') || [];
  const partners = users?.filter((user: any) => user.role === 'partner') || [];
  const jobOffers = offers?.filter((offer: any) => offer.status !== 'pending');
  const offersSent = offers?.length || 0;
  const jobConversion = (acceptedOffers?.length / offersSent) * 100 || 0;
  const jobConversionPercentage = jobConversion.toFixed(2);
  // console.log({ user });

  useEffect(() => {
    const getCookies = async () => {
      const cookies = await getTokens();
      setIsRefreshed(false);
      setCookies(cookies);
    };

    getCookies();
  }, [isRefreshed]);

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
  };
  const deleteAccount = async () => {
    await fetch('/api/user/delete-account', {
      method: 'DELETE',
    });

    router.push('/logout');
  };

  const isPersonalInfoCompleted =
    Object.keys(user?.personalInfo || {}).length > 0;
  const isProfessionalInfoCompleted =
    Object.keys(user?.professionalInfo || {}).length > 0;
  const isDocumentUploadCompleted =
    Object.keys(user?.documents || {}).length > 0;

  const isUndreadNotification = notifications?.filter(
    (noti: any) => !noti.isRead
  );

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
    refetchUser();
    if (responseData.status === 200) {
      const completionPercentage = responseData.completionPercentage;
      if (source === 'admin') {
        router.push('/admin');
      } else {
        const proPath =
          completionPercentage > 50
            ? '/pro/profile'
            : '/pro/onboard/personal-info';

        const partnerPath =
          completionPercentage > 50
            ? querySuffix
              ? `/partner/pros/${id}?s=true`
              : '/partner/profile'
            : `/partner/onboard/personal-info${querySuffix}`;

        source === 'pro' && router.push(proPath);
        source === 'partner' && router.push(partnerPath);
        return toast.success(responseData.message || `Login successful`, {
          position: 'top-center',
        });
      }
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `Login failed`, {
        position: 'top-center',
      });
    }
  };

  const handleSignup = async (data: any, source: string) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        // phone: data.phone,
        role: source,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      source === 'pro'
        ? router.push('/pro/login')
        : router.push(`/partner/login${querySuffix}`);
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

  const handleForgotPassword = async (data: any, source: string) => {
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      const otpExpiry = responseData.otpExpiry;

      window.localStorage.setItem('otpExpiry', otpExpiry);

      source === 'pro'
        ? (window.location.href = `/pro/verify-otp?email=${data.email}`)
        : (window.location.href = `/partner/verify-otp?email=${data.email}`);
      return toast.success(responseData.message || `OTP sent successfully`, {
        position: 'top-center',
      });
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `OTP sending failed`, {
        position: 'top-center',
      });
    }
  };
  const handleResetPassword = async (
    data: any,
    email: string,
    source: string
  ) => {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password: data.password,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      source === 'pro'
        ? (window.location.href = `/pro/login`)
        : (window.location.href = `/partner/login`);
      return toast.success(
        responseData.message || `Password reset successfull`,
        {
          position: 'top-center',
        }
      );
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `Password reset failed`, {
        position: 'top-center',
      });
    }
  };

  const handleResendOTP = async (email: string) => {
    setIsResendOTPLoading(true);
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      setIsOtpResend(true);

      const otpExpiry = responseData.otpExpiry;

      window.localStorage.setItem('otpExpiry', otpExpiry);
      setIsResendOTPLoading(false);
      return toast.success(responseData.message || `OTP resent successfully`, {
        position: 'top-center',
      });
    }

    if (responseData.status === 500) {
      setIsResendOTPLoading(false);
      return toast.error(responseData.message || `OTP resending failed`, {
        position: 'top-center',
      });
    }
  };

  const handleVerifyOTP = async (otp: any, email: string, source: string) => {
    const response = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        otp,
      }),
    });

    const responseData: any = await response.json();

    if (responseData.status === 200) {
      source === 'pro'
        ? (window.location.href = `/pro/reset-password?email=${email}`)
        : (window.location.href = `/partner/reset-password?email=${email}`);
      return toast.success(
        responseData.message || `OTP verified successfully`,
        {
          position: 'top-center',
        }
      );
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `OTP verification failed`, {
        position: 'top-center',
      });
    }
  };

  const sendNotification = async (
    message: string,
    user: string,
    email?: string
  ) => {
    await fetch('/api/user/notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        user,
        email,
      }),
    });
  };

  // const handleSavePersonalInfo = async (source: string) => {
  //   if (personalInfoRef.current) {
  //     console.log('personalInfoRef.current');
  //     personalInfoRef.current.dispatchEvent(
  //       new Event('submit', { bubbles: true, cancelable: true })
  //     );
  //   }

  //   if (source === 'pro') {
  //     if (professionalInfoRef.current) {
  //       console.log('professionalInfoRef.current');
  //       setTimeout(() => {
  //         professionalInfoRef.current?.dispatchEvent(
  //           new Event('submit', { bubbles: true, cancelable: true })
  //         );
  //       }, 0);
  //     }
  //   }
  // };
  const handleSavePersonalInfo = async (source: string) => {
    try {
      if (personalInfoRef.current) {
        console.log('insidee', personalInfoRef.current);
        await personalInfoRef.current.submitForm(); // ✅ Correct: Calls submit function
      }

      if (source === 'pro' && professionalInfoRef.current) {
        await professionalInfoRef.current.submitForm(); // ✅ Correct: Calls submit function
      }
      if (source === 'pro' && documentUploadRef.current) {
        console.log('documentUploadRef.current', documentUploadRef.current);
        await documentUploadRef.current.submitForm(); // ✅ Correct: Calls submit function
      }
      closeEditModal();
    } catch (error) {
      console.error('Error submitting forms:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isPersonalInfoCompleted,
        isProfessionalInfoCompleted,
        isDocumentUploadCompleted,
        refetchUser,
        openAlert,
        openPartner,
        closeAlert,
        closePartner,
        isOpenAlert,
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
        handleForgotPassword,
        handleVerifyOTP,
        handleResendOTP,
        isOtpResend,
        isResendOTPLoading,
        setIsResendOTPLoading,
        handleResetPassword,
        offers,
        refetchOffers,
        isOffersLoading,
        offerData,
        setOfferData,
        querySuffix,
        shouldStorePro,
        id,
        actionData,
        setActionData,
        pendingOffers,
        isOpenOfferAction,
        openOfferAction,
        closeOfferAction,
        jobOffers,
        notifications,
        refetchNotifications,
        isUserLoading,
        isUndreadNotification,
        sendNotification,
        offersSent,
        jobConversionPercentage,
        deleteAccount,
        users,
        refetchUsers,
        isUsersLoading,
        personalInfoRef,
        professionalInfoRef,
        documentUploadRef,
        handleSavePersonalInfo,
        openEditModal,
        closeEditModal,
        isOpenEditModal,
        adminEditData,
        setAdminEditData,
        pros,
        partners,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
