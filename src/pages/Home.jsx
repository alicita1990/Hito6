import React, { useEffect } from 'react';
import Header from '../components/Header';
import MyCard from '../components/MyCard';

function Home() {
  const [pizzas, setPizzas] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pizzas.map(pizza => (
          <MyCard 
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

