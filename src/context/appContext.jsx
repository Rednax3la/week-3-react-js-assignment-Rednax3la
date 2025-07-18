import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <AppContext.Provider value={{ search, setSearch, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
}
