import React, { useState, createContext } from 'react';
import { SiTruenas } from 'react-icons/si';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  const login = async (email, password) => {
    try {
      console.log("Login attempt:", email, password); // Depuración
      const response = await fetch('/Mamma-mia-router-1.git/api/auth/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión'); // Lanza un error si la respuesta no es OK
      }


      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setUser(email);
        console.log("Login successful:", email); // Depuración
      } else {
        throw new Error(data.message || 'Error desconocido'); // Maneja el error si no hay token
      }
    } catch (error) {
      console.error("Login error:", error); // Depuración
      throw error; // Lanza el error para manejarlo en el componente
    }
  };
  
  
  const register = async (email, password) => {
    try {
      const response = await fetch('/Mamma-mia-router-1.git/api/auth/Formulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el registro'); // Lanza un error si la respuesta no es OK
      }

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setUser(email);
      } else {
        throw new Error(data.message || 'Error desconocido'); // Maneja el error si no hay token
      }
    } catch (error) {
      console.error("Error en el registro:", error); // Depuración
      throw error; // Lanza el error para manejarlo en el componente
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
