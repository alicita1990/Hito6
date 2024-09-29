import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Usercontext';

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='login'>
    <h1>Bienvenido de vuelta! </h1>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className= "botonlogin"type="submit">ingresar</button>
    </form>
    </div>
  );
};

export default Login;


