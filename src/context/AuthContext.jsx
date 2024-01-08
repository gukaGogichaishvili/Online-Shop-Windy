import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("authToken", null);
  const [generalUserData, setGeneralUserData] = useLocalStorage("authData", {});
  const login = (data) => {
    setToken(data.id);
    setGeneralUserData(data);
    console.log("i am logged in");
  };
  
  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, generalUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
