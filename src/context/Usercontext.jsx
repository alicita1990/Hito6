import React, { useState, createContext } from 'react';
import { SiTruenas } from 'react-icons/si';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(true); 

  const login = () => {
    setToken(true);
  };
  
  const logout = () => {
    setUser(true);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
