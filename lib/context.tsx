/* eslint-disable react/prop-types */

import { createContext, useContext } from 'react';

export const UserContext = createContext<any>({});

export function useAppContext() {
  return useContext(UserContext);
}

const ContextProvider = ({ children }: any) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default ContextProvider;
