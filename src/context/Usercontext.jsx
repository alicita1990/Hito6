import React, { useState, createContext } from 'react';
import { SiTruenas } from 'react-icons/si';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  const login = async (email, password) => {
    try {
      console.log("Login attempt:", email, password); // Depuración
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setUser(email);
        console.log("Login successful:", email); // Depuración
      } else {
        console.log("Login failed:", data.message); // Depuración
      }
    } catch (error) {
      console.error("Login error:", error); // Depuración
    }
  };
  
  
  const register = async (email, password) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      setUser(email);
    }
  };
  
  const logout = () => {
    console.log("Logout initiated"); 
    setToken(null);
    setUser(null);
    console.log("Logout successful"); 
  };
  

  return (
    <UserContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
