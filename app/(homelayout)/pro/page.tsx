import Link from 'next/link';

export default function ProLandingPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to Pro Landing Page</h1>
      <p className='mb-4'>This page is for professional users.</p>
      <Link href='/pro/login' className='text-blue-500 hover:underline'>
        Pro Sign In
      </Link>
    </div>
  );
}
