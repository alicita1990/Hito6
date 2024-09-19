import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextPizza } from '../components/context/ContexPizza'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../components/context/Cartcontext';

const Pizza = () => {
  const { id } = useParams(); 
  const pizzas = useContext(ContextPizza); 
  const { addToCart } = useContext(CartContext); 

  if (!pizzas || pizzas.length === 0) {
    return <p>Cargando detalles de la pizza...</p>;
  }

 
  const pizza = pizzas.find(pizza => pizza.id === parseInt(id, 10));

  if (!pizza) {
    return <p>No se encontraron detalles para esta pizza.</p>;
  }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            {pizza.desc}
            <br />
            <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
            <br />
            <strong>Precio:</strong> ${pizza.price}
          </Card.Text>
          <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pizza;
