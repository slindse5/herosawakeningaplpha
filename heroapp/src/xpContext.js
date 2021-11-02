import React, { createContext, useState } from "react";

export const XpContext = createContext();

// This context provider is passed to any component requiring the context
export const XpProvider = ({ children }) => {
  const [tXP, settXP] = useState(0);
  const [xpNeed, setxpNeed] = useState(3000);
  const [level, setlevel] = useState(1);
  const [uXP, setuXP] = useState(0);
  const [xpPercent, getxpPercent] = useState(0);
  const [corPercent, getcorPercent] = useState(0);
  return (
    <XpContext.Provider
      value={{
        tXP,
        xpNeed,
        level,
        uXP,
        xpPercent,
        corPercent,
        settXP,
        setxpNeed,
        setlevel,
        setuXP,
        getxpPercent,
        getcorPercent
      }}
    >
      {children}
    </XpContext.Provider>
  );
};