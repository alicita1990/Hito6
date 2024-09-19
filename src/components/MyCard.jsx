import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Cartcontext } from './context/Cartcontext'; 
import { Link } from 'react-router-dom'; 

import { CartProvider } from './context/Cartcontext';

const MyCard = ({ desc, id, img, ingredients, name, price }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <CardProvider>
    <Card style={{ width: '9rem', margin: '20px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
          <br />
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
          <br />
          <strong>Precio:</strong> ${price}
        </Card.Text>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="dark" onClick={() => addToCart({ id, name, price, ingredients })}>
  +
</Button>
<Link to={`/pizza/${id}`}>
            <Button variant="dark">detalles</Button>
          </Link>
  
          <Button variant="dark" onClick={() => removeFromCart(id)}>-</Button>
        </div>
      </Card.Body>
    </Card>
    </CardProvider>
  );
}

export default MyCard;



