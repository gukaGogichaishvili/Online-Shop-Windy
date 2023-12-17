import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('authToken', {});
  const [generalUserData, setGeneralUserData] = useLocalStorage('authData', {});
  const login = (data) => {
    setToken(data.id);
    setGeneralUserData(data);
    
  };
  console.log(token);
  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, generalUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
