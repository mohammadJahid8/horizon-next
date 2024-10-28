/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react';

export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [isOpenNeedMore, setIsOpenNeedMore] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  console.log({ isPartnerOpen });

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

  console.log({ user });

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
