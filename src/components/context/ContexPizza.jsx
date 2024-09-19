import { createContext, useState, useEffect } from "react";


export const ContextPizza = createContext();


export const ContextProvider = ({ children }) => {
 
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error al obtener los datos de la API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextPizza.Provider value={data}>
      {children}
    </ContextPizza.Provider>
  );
};
