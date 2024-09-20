import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MyCard from '../components/MyCard';
import { CartProvider } from '../components/context/Cartcontext';

const Pizza = () => {
  const { id } = useParams();
 const { data } = useContext(Cartcontext);
 const [pizza, setPizza] = useState(null);

console.log (data)

//     useEffect(() => {
//          if (data && Array.isArray(data)) {
//       const pizzaToDisplay = data.find(p => p.id === parseInt(id, 10));       setPizza(pizzaToDisplay);
//     }
//   }, [data, id]);

  return (
    <div className='cardPizza'>
      <Header />
      {pizza && (
        <MyCard 
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          desc={pizza.desc}
        />
      )}
    </div>
  );
};

export default Pizza;


