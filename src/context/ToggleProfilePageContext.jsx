import { createContext, useState } from "react";

export const ToggleProfilePageContext = createContext();

export const ProfileToggleProvider = ({ children }) => {
  const [editPage, setEditPage] = useState(true);

  return (
    <ToggleProfilePageContext.Provider value={{ editPage, setEditPage }}>
      {children}
    </ToggleProfilePageContext.Provider>
  );
};
