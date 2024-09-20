import React from 'react'; 


const PizzaContext = React.createContext();

export const PizzaProvider = ({ children }) => {

  const [data, setData] = React.useState([]);

  return (
    <PizzaContext.Provider value={{ data, setData }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;