import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Usercontext';

const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <div className='form'>
    <h1>Registrate aqui!</h1>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="botonformulario" type="submit">Registrame!</button>
    </form>
    </div>
  );
};

export default Register;
