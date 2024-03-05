import { createContext, useState } from "react";

export const OpenContext = createContext(null);
const UseOpen = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState("light");

  const useInfo = { open, setOpen, theme, setTheme };

  return (
    <OpenContext.Provider value={useInfo}>{children}</OpenContext.Provider>
  );
};

export default UseOpen;
