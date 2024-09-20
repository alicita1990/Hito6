import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); 

  const logout = () => {
    setToken(null); 
  };

  const login = (newToken) => {
    setToken(newToken);
  };

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
