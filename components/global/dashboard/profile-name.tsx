import React from 'react';

const ProfileName = ({ name }: { name: string }) => {
  return <h1 className='text-xl sm:text-2xl font-semibold'>{name}</h1>;
};

export default ProfileName;
