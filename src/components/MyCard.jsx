import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from './context/Cartcontext';
import { useNavigate } from 'react-router-dom'; 

const MyCard = ({ desc, id, img, ingredients, name, price }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();
  const verPizza = () => {
    navigate(`/Pizza/${id}`);  
  }
  //  const {data} = useContext (Pizzacontext);

  return (
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
  Añadir
</Button>
<Button variant="dark" onClick={verPizza}>Detalle</Button>
          <Button variant="dark" onClick={() => removeFromCart(id)}>Quitar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;




