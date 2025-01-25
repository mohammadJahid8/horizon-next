const OffersSkeleton = () => (
  <div className='flex flex-col gap-8'>
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className='px-4 p-6 md:p-8 bg-white md:rounded-[16px] animate-pulse'
      >
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-4'>
              <div className='h-4 bg-gray-200 rounded w-1/4'></div>
              <div className='h-4 bg-gray-200 rounded w-1/3'></div>
            </div>
            <div className='h-8 w-8 bg-gray-200 rounded-full'></div>
          </div>
          <div className='flex xs:flex-row flex-col justify-between gap-4 xs:items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-12 h-12 sm:size-[58px] bg-gray-200 rounded-full'></div>
              <div>
                <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                <div className='h-4 bg-gray-200 rounded w-1/3 mt-2'></div>
              </div>
            </div>
            <div className='h-10 md:h-12 bg-gray-200 rounded-[12px] w-24'></div>
          </div>
          <div className='h-4 bg-gray-200 rounded w-full mt-4'></div>
          <div className='flex flex-wrap gap-3 items-center mt-4'>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className='h-7 md:h-9 bg-gray-200 rounded w-16'
              ></div>
            ))}
            <div className='h-4 bg-gray-200 rounded w-12'></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-auto mt-4'>
            <div className='flex flex-col gap-2'>
              <div className='h-4 bg-gray-200 rounded w-1/2'></div>
              <div className='h-4 bg-gray-200 rounded w-3/4'></div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='h-4 bg-gray-200 rounded w-1/2'></div>
              <div className='h-4 bg-gray-200 rounded w-3/4'></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default OffersSkeleton;
