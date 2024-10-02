import React, { useState, createContext } from 'react';
import { SiTruenas } from 'react-icons/si';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  const login = async (email, password) => {
    try {
      console.log("Login attempt:", email, password); 
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión'); 
      }

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        setToken(null); 
        setEmail(null);
      } else {
        setUser(data);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        setToken(null); 
      } else {
        setToken(data.token);
        alert(`Usuario registrado con éxito`);
      }
    } catch (error) {
      console.error("Registration error:", error);
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

export default UserProvider;