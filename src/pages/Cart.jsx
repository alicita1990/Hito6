import React, { useContext, useState } from 'react';
import { CartContext } from '../context/Cartcontext';
import { UserContext } from '../context/Usercontext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, getTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setSuccessMessage('Compra realizada con éxito');
      } else {
        setSuccessMessage('Hubo un problema al realizar la compra.');
      }
    } catch (error) {
      setSuccessMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div className='nuevobody'>
      <div className='titulo'><h2>Carrito de Compras</h2></div>
      <div className='bodycards'>  
        {cart.map((pizza) => (
          <Card key={pizza.id}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.id} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                {pizza.desc}
                <br />
                <strong>Precio:</strong> ${pizza.price}
                <br />
                <strong>Cantidad:</strong> {pizza.quantity}
              </Card.Text>
              <div>
                <Button variant="secondary" onClick={() => decrementQuantity(pizza.id)}>-</Button>
                <Button variant="secondary" onClick={() => incrementQuantity(pizza.id)} style={{ marginLeft: '10px' }}>+</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='botonprecio'>
        <h3>Total: ${getTotal()}</h3>
        <Button variant="success" onClick={handleCheckout}>Pagar</Button>
      </div>
      {successMessage && <p className='alerta'>{successMessage}</p>}
    </div>
  );
};

export default Cart;
