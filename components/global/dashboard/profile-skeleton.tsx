export default function ProfileSkeleton() {
  return (
    <div className='w-full bg-white rounded-[16px]'>
      {/* Cover Image Skeleton */}
      <div className='relative h-[300px] w-full bg-gray-200 animate-pulse rounded-t-[16px]'>
        <div className='absolute top-4 left-4'>
          <div className='flex items-center gap-2 px-4 py-2 bg-black/50 text-white rounded-lg'>
            <div className='w-5 h-5 bg-white/50 rounded animate-pulse' />
            <div className='h-4 w-24 bg-white/50 rounded animate-pulse' />
          </div>
        </div>
      </div>

      <div className='px-8 py-4'>
        {/* Profile Section */}
        <div className='flex justify-between items-start'>
          {/* Left Side - Profile Info */}
          <div className='flex items-start gap-6'>
            {/* Avatar Skeleton */}
            <div className='relative -mt-16'>
              <div className='h-32 w-32 rounded-full bg-gray-300 border-4 border-white animate-pulse'>
                <div className='absolute bottom-0 right-0 h-8 w-8 rounded-full bg-gray-400 animate-pulse' />
              </div>
            </div>

            {/* Name and Progress */}
            <div className='mt-2 space-y-3'>
              <div className='space-y-1'>
                <div className='h-6 w-32 bg-gray-300 rounded animate-pulse' />
                <div className='h-4 w-24 bg-gray-200 rounded animate-pulse' />
              </div>

              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  <div className='h-4 w-28 bg-gray-200 rounded animate-pulse' />
                  <div className='h-4 w-8 bg-gray-200 rounded animate-pulse' />
                </div>
                <div className='h-2 w-60 bg-gray-200 rounded'>
                  <div className='h-2 w-[77%] bg-green-500 rounded animate-pulse' />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className='flex items-center gap-8'>
            {/* Offers Sent */}
            <div className='text-right space-y-1'>
              <div className='flex items-center justify-end gap-1'>
                <div className='h-4 w-20 bg-gray-200 rounded animate-pulse' />
                <div className='h-4 w-4 bg-gray-200 rounded animate-pulse' />
              </div>
              <div className='h-5 w-4 bg-gray-300 rounded animate-pulse ml-auto' />
            </div>

            {/* Jobs Conversion */}
            <div className='text-right space-y-1'>
              <div className='flex items-center justify-end gap-1'>
                <div className='h-4 w-28 bg-gray-200 rounded animate-pulse' />
                <div className='h-4 w-4 bg-gray-200 rounded-full animate-pulse' />
              </div>
              <div className='h-5 w-16 bg-gray-300 rounded animate-pulse ml-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
