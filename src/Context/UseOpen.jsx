import { createContext, useState } from "react";

export const OpenContext = createContext(null);
const UseOpen = ({ children }) => {
  const [open, setOpen] = useState(true);

  const useInfo = { open, setOpen };

  return (
    <OpenContext.Provider value={useInfo}>{children}</OpenContext.Provider>
  );
};

export default UseOpen;
