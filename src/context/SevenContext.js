"use client";

import React, { createContext, useState } from "react";

export const SeventoContext = createContext();

export const SeventwoProvider = ({ children }) => {
    const [page, setPage] = useState(1);



  return (
    <SeventoContext.Provider
      value={{
        page,
        setPage,

      }}
    >
      {children}
    </SeventoContext.Provider>
  );
};
