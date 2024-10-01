import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Usercontext';


const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    try {
      await register(email, password); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='form'>
      <h1>¡Regístrate aquí!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button className="botonformulario" type="submit" disabled={loading}>
          {loading ? 'Registrando...' : '¡Regístrame!'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;