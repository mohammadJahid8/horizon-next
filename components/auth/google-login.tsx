import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

interface GoogleResponse {
  _tokenResponse: {
    email: string;
    fullName: string;
    photoUrl: string;
  };
}

export default function GoogleLogin() {
  // const { userRefetch, setUserRefetch, logInWithGoogle, loading, setLoading } =
  //   useContext(UserContext);
  // const router = useRouter();

  // const handleGoogleSignIn = async () => {
  //   setLoading(true);
  //   let res: GoogleResponse | undefined;
  //   try {
  //     res = await logInWithGoogle();
  //   } catch (error: any) {
  //     setLoading(false);
  //     console.log({ error });
  //     toast.error(error.message);
  //   }

  //   if (res && res._tokenResponse.email) {
  //     const payload = {
  //       name: res._tokenResponse.fullName,
  //       email: res._tokenResponse.email,
  //       image: res._tokenResponse.photoUrl,
  //       role: "user",
  //     };

  //     try {
  //       const promise = await axios.post(`/users/create-google-user`, payload);
  //       if (promise.status === 200) {
  //         localStorage.setItem("accessToken", promise.data.data);
  //         setUserRefetch(!userRefetch);
  //         setTimeout(() => {
  //           toast.success(`Logged in`, {
  //             id: "login",
  //           });
  //           router.push("/");
  //           setLoading(false);
  //         }, 1000);
  //       }
  //     } catch (error: any) {
  //       console.log(error);
  //       setLoading(false);
  //       return toast.error(error.response.data.message || `Log in failed`, {
  //         id: "login",
  //       });
  //     }
  //   }
  // };

  return (
    <Button
      className='w-full h-[75px] rounded-[12px] text-lg font-medium text-muted-foreground bg-[#f9f9f9]'
      variant='outline'
      type='button'
      // disabled={loading}
      // onClick={handleGoogleSignIn}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='24'
        height='24'
        viewBox='0 0 48 48'
        className='mr-2'
      >
        <path
          fill='#FFC107'
          d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
        ></path>
        <path
          fill='#FF3D00'
          d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
        ></path>
        <path
          fill='#4CAF50'
          d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
        ></path>
        <path
          fill='#1976D2'
          d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
        ></path>
      </svg>
      Login with google
    </Button>
  );
}
