import Link from 'next/link';

export default function PartnerPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6'>Partner Page</h1>
      <p className='mb-4'>This page is specifically for partners.</p>
      <div className='flex flex-col gap-4'>
        <Link href='/pro/login' className='text-blue-500 hover:underline'>
          Pro login
        </Link>
        <Link href='/partner/login' className='text-blue-500 hover:underline'>
          Partner login
        </Link>
      </div>
    </div>
  );
}
